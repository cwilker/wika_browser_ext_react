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
    accountName: "<Account Name>",
    password: ""
  };
  return account;
};
const generateAddAccount = () => {
  let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
  return importAccount(phrase);
};
const tmpGen = () => {
  let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
  return importAccount(phrase);
};
let accounts = {};
accounts["a1"] = tmpGen();
accounts["a1"]["key"] = "a1";
accounts["a2"] = tmpGen();
accounts["a2"]["key"] = "a2";
accounts["a3"] = tmpGen();
accounts["a3"]["key"] = "a3";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
    this.toggleAccountMenu = this.toggleAccountMenu.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.toggleAddAccount = this.toggleAddAccount.bind(this);
    this.newAccount = this.newAccount.bind(this);
    this.addSelectAccount = this.addSelectAccount.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
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
      randomAccount: {}
    };
  }
  componentDidMount = () => {
    this.setState({page: "welcome"});
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
  };
  addSelectAccount = (account) => {
    if (account.hasOwnProperty("key")) {
      let accounts2 = this.state.accounts;
      accounts2[account["key"]] = account;
      this.setState({accounts: accounts2, accountSelected: account["key"]});
    } else {
      let accounts2 = this.state.accounts;
      let newAccountKey = "a" + (Object.keys(accounts2).length + 1);
      account["key"] = newAccountKey;
      accounts2[newAccountKey] = account;
      this.setState({accounts: accounts2, accountSelected: newAccountKey});
    }
  };
  selectAccount = (accountKey) => {
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
    }, /* @__PURE__ */ React.createElement(Header, {
      page: this.state.page,
      toggleSearch: this.toggleSearch,
      toggleMore: this.toggleMore,
      toggleSettings: this.toggleSettings,
      togglePage: this.togglePage,
      accountSelected: this.state.accountSelected,
      accounts: this.state.accounts
    }), /* @__PURE__ */ React.createElement(ContentContainer, {
      content: /* @__PURE__ */ React.createElement(MainContent, {
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
        toggleAccountMenu: this.toggleAccountMenu
      })
    }), /* @__PURE__ */ React.createElement(MainButton, {
      page: this.state.page,
      togglePage: this.togglePage,
      toggleAddAccount: this.toggleAddAccount,
      addAccount: this.state.addAccount,
      previousPage: this.state.previousPage,
      newAccount: this.newAccount,
      addSelectAccount: this.addSelectAccount,
      randomAccount: this.state.randomAccount,
      selectAccount: this.selectAccount
    })), this.state.isSearchOpen && /* @__PURE__ */ React.createElement(ContentContainer, {
      content: /* @__PURE__ */ React.createElement(SearchContent, {
        togglePage: this.togglePage
      }),
      togglePage: this.togglePage
    }), this.state.isMoreOpen && /* @__PURE__ */ React.createElement(ContentContainer, {
      content: /* @__PURE__ */ React.createElement(MoreContent, {
        togglePage: this.togglePage,
        toggleMore: this.toggleMore,
        toggleSettings: this.toggleSettings,
        newAccount: this.newAccount
      }),
      togglePage: this.togglePage
    }), this.state.isAccountOpen && /* @__PURE__ */ React.createElement(ContentContainer, {
      content: /* @__PURE__ */ React.createElement(AccountMenuContent, {
        togglePage: this.togglePage,
        toggleAccountMenu: this.toggleAccountMenu,
        accounts: this.state.accounts,
        accountSelected: this.state.accountSelected,
        toggleAddAccount: this.toggleAddAccount
      }),
      togglePage: this.togglePage
    }), this.state.isSettingsOpen && /* @__PURE__ */ React.createElement(ContentContainer, {
      content: /* @__PURE__ */ React.createElement(SettingsContent, {
        togglePage: this.togglePage,
        toggleMore: this.toggleMore,
        toggleSettings: this.toggleSettings,
        newAccount: this.newAccount
      }),
      togglePage: this.togglePage
    }));
  };
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
