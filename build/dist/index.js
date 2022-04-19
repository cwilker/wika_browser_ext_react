import React from "../snowpack/pkg/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import {parseError} from "./utils/misc.js";
import Header from "./components/header/Header.js";
import MainButton from "./components/MainButton.js";
import ContentContainer from "./components/ContentContainer.js";
import MoreContent from "./components/header/MoreContent.js";
import SearchContent from "./components/header/searchContent.js";
import AccountMenuContent from "./components/header/AccountMenuContent.js";
import SettingsContent from "./components/header/SettingsContent.js";
import MainContent from "./components/MainContent.js";
import WikaNetwork from "./network.js";
import {delay} from "../snowpack/pkg/rxjs.js";
import AppContext from "./utils/context.js";
import AES from "../snowpack/pkg/crypto-js/aes.js";
import Utf8 from "../snowpack/pkg/crypto-js/enc-utf8.js";
import StorageExtension from "./utils/storageExtension.js";
import StorageWeb from "./utils/storageWeb.js";
const StorageManagment = {
  extension: StorageExtension,
  web: StorageWeb
};
const url = window.location.href;
var env = url.split(":")[0] == "chrome-extension" ? "extension" : "web";
const BACKGROUND = {
  cryptoReady: false,
  network: null,
  storage: new StorageManagment[env]()
};
const encryptWithAES = (text, passphrase) => {
  return AES.encrypt(text, passphrase).toString();
};
const decryptWithAES = (ciphertext, passphrase) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};
function bytesToHex(byteArray) {
  var s = "0x";
  byteArray.forEach(function(byte) {
    s += ("0" + (byte & 255).toString(16)).slice(-2);
  });
  return s;
}
const importAccount = (phrase) => {
  let keyring = new polkadotKeyring.Keyring({type: "sr25519"});
  let newPair = keyring.addFromUri(phrase);
  let account = {
    address: newPair.address,
    addressRaw: bytesToHex(newPair.addressRaw),
    phrase,
    accountName: "<Account Name>"
  };
  return account;
};
const generateAddAccount = () => {
  let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
  return importAccount(phrase);
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome to Wika!",
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false,
      addAccount: {},
      previousPage: "",
      accounts: {},
      accountSelected: "",
      randomAccount: {},
      page: "welcome"
    };
  }
  componentDidMount = async () => {
    let network = new WikaNetwork();
    await network.connect(() => {
      BACKGROUND.network = network;
      console.log("connected");
    });
    console.log("componentDidMount1");
    const accounts = await BACKGROUND.storage.get("accounts");
    const accountSelected = await BACKGROUND.storage.get("accountSelected");
    console.log(accounts);
    console.log(accountSelected);
    var keys = Object.keys(accounts);
    var page;
    if (keys.length > 0) {
      page = "accountSelect";
      if (accountSelected) {
        page = "account";
      }
    } else {
      page = "welcome";
    }
    this.setState({accounts, accountSelected, page});
  };
  importAccountFromPhrase = (phrase) => {
    return importAccount(phrase);
  };
  toggleSearch = () => {
    this.setState({
      isSearchOpen: !this.state.isSearchOpen,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false
    });
  };
  toggleMore = () => {
    this.setState({
      isSearchOpen: false,
      isMoreOpen: !this.state.isMoreOpen,
      isSettingsOpen: false,
      isAccountOpen: false
    });
  };
  toggleSettings = () => {
    this.setState({
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: !this.state.isMoreOpen,
      isAccountOpen: false
    });
  };
  toggleAccountMenu = () => {
    this.setState({
      isAccountOpen: !this.state.isAccountOpen,
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false
    });
  };
  togglePage = (currentPage, page) => {
    this.setState({
      previousPage: currentPage,
      page,
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false
    });
  };
  toggleAddAccount = (account) => {
    this.setState({
      addAccount: account
    });
  };
  newAccount = () => {
    let randomAccount = generateAddAccount();
    this.setState({addAccount: randomAccount});
    console.log("staging account");
    console.log(randomAccount);
  };
  addSelectAccount = async (account) => {
    var accounts = this.state.accounts;
    var newAccountKey;
    if (account.hasOwnProperty("key")) {
      newAccountKey = account["key"];
    } else {
      let accountKeys = Object.keys(accounts);
      let maxKey = 0;
      accountKeys.forEach(function(e) {
        if (parseInt(e.split("a")[1]) > maxKey) {
          maxKey = parseInt(e.split("a")[1]);
        }
        ;
      });
      newAccountKey = "a" + (maxKey + 1);
      account["key"] = newAccountKey;
    }
    var pw = document.getElementById("password").value;
    account.phrase = encryptWithAES(account.phrase, pw);
    accounts[newAccountKey] = account;
    console.log(account);
    this.setState({accounts, accountSelected: newAccountKey});
    console.log("success");
    BACKGROUND.storage.set({accounts, accountSelected: newAccountKey});
  };
  selectAccount = (accountKey) => {
    BACKGROUND.storage.set({accountSelected: accountKey});
    this.setState({accountSelected: accountKey});
  };
  closeMenu = () => {
    if ([this.state.isSearchOpen, this.state.isMoreOpen, this.state.isSettingsOpen, this.state.isAccountOpen].some((x) => x)) {
      this.setState({
        isSearchOpen: false,
        isMoreOpen: false,
        isSettingsOpen: false,
        isAccountOpen: false
      });
    }
  };
  render = () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      onClick: () => this.closeMenu()
    }, /* @__PURE__ */ React.createElement(AppContext.Provider, {
      value: {
        page: this.state.page,
        togglePage: this.togglePage,
        toggleAddAccount: this.toggleAddAccount,
        addAccount: this.state.addAccount,
        accounts: this.state.accounts,
        accountSelected: this.state.accountSelected,
        selectAccount: this.selectAccount,
        addSelectAccount: this.addSelectAccount,
        randomAccount: this.state.randomAccount,
        importAccountFromPhrase: this.importAccountFromPhrase,
        toggleAccountMenu: this.toggleAccountMenu,
        newAccount: this.newAccount,
        toggleSearch: this.toggleSearch,
        toggleMore: this.toggleMore,
        toggleSettings: this.toggleSettings,
        BACKGROUND
      }
    }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(MainContent, null), /* @__PURE__ */ React.createElement(MainButton, null), this.state.isSearchOpen && /* @__PURE__ */ React.createElement(SearchContent, null), this.state.isMoreOpen && /* @__PURE__ */ React.createElement(MoreContent, null), this.state.isAccountOpen && /* @__PURE__ */ React.createElement(AccountMenuContent, null), this.state.isSettingsOpen && /* @__PURE__ */ React.createElement(SettingsContent, null))));
  };
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
