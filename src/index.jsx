import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {parseError} from "./utils/misc";
import Header from "./components/header/Header";
import MainButton from "./components/MainButton"
import ContentContainer from './components/ContentContainer';
import MoreContent from './components/header/MoreContent'
import SearchContent from './components/header/searchContent';
import AccountMenuContent from './components/header/AccountMenuContent';
import SettingsContent  from './components/header/SettingsContent';
import MainContent from './components/MainContent';
import WikaNetwork from './network';
import { delay } from 'rxjs';

import AppContext from './utils/context' ;
import StorageManagment from './utils/storage'
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';


const BACKGROUND = {
  cryptoReady: false,
  network: null,
  storage: null
}

 
const encryptWithAES = (text, passphrase) => {
  return AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext, passphrase) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};


function bytesToHex(byteArray) {
  var s = '0x';
  byteArray.forEach(function (byte) {
      s += ('0' + (byte & 0xFF).toString(16)).slice(-2);
  });
  return s;
}

const importAccount = (phrase) => {
  let keyring = new polkadotKeyring.Keyring({ type: 'sr25519' });
  let newPair = keyring.addFromUri(phrase) ;
  let account = {
      address: newPair.address,
      addressRaw: bytesToHex(newPair.addressRaw),
      phrase: phrase,
      accountName: '<Account Name>'
  } ;
  return account ;
}

const generateAddAccount = () => {
  let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
  return importAccount(phrase) ;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSearch = this.toggleSearch.bind(this)
    this.toggleMore = this.toggleMore.bind(this)
    this.toggleAccountMenu = this.toggleAccountMenu.bind(this)
    this.togglePage = this.togglePage.bind(this)
    this.toggleAddAccount = this.toggleAddAccount.bind(this)
    this.newAccount = this.newAccount.bind(this)
    this.addSelectAccount = this.addSelectAccount.bind(this)
    this.selectAccount = this.selectAccount.bind(this)
    this.state = {
      header: "Welcome to Wika!",
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false,
      addAccount: {},
      previousPage: '',
      accounts: {},
      accountSelected: '',
      randomAccount: {},
      page: 'welcome'
    }
  }

  componentDidMount = async () => {
    let network = new WikaNetwork() ;
    await network.connect(() => {
        BACKGROUND.network = network ;
        console.log('connected') ;
    }) ;
    BACKGROUND.storage = new StorageManagment();
    console.log('componentDidMount1')
    const accounts = await BACKGROUND.storage.get('accounts')
    const accountSelected = await BACKGROUND.storage.get('accountSelected')
    console.log(accounts)
    console.log(accountSelected)
    var keys = Object.keys(accounts)
    var page
    if (keys.length > 0) {
      page = 'accountSelect'
      if (accountSelected) {
        page = 'account'
      }
    } else {
      page = 'welcome'
    }
    this.setState({accounts:accounts, accountSelected:accountSelected, page:page})
  }

  importAccountFromPhrase = (phrase) => {
    return importAccount(phrase)
  }

  toggleSearch = () => {
    this.setState({ 
      isSearchOpen: !this.state.isSearchOpen,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false
    });
  }

  toggleMore = () => {
    this.setState({ 
      isSearchOpen: false,
      isMoreOpen: !this.state.isMoreOpen,
      isSettingsOpen: false,
      isAccountOpen: false
    });
  }

  toggleSettings = () => {
    this.setState({ 
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: !this.state.isMoreOpen,
      isAccountOpen: false
    });
  }

  toggleAccountMenu = () => {
    this.setState({
      isAccountOpen: !this.state.isAccountOpen,
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false
    })
  }

  togglePage = (currentPage, page) => {
    this.setState({
      previousPage: currentPage,
      page: page,
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false
    })
  }

  toggleAddAccount = (account) => {
    this.setState({
      addAccount: account
    })
  }

  newAccount = () => {
    let randomAccount =  generateAddAccount()
    this.setState({addAccount: randomAccount})
    console.log('staging account')
    console.log(randomAccount)
  }

  addSelectAccount = async (account) => {
    var accounts = this.state.accounts
    var newAccountKey
    if (account.hasOwnProperty('key')) {
      newAccountKey = account['key']
    } else {
      let accountKeys = Object.keys(accounts)
      let maxKey = 0
      accountKeys.forEach(function (e) {
        if (parseInt(e.split('a')[1]) > maxKey) {
          maxKey = parseInt(e.split('a')[1])
        };
      });
      newAccountKey = 'a' + (maxKey + 1)
      account['key'] = newAccountKey
    }
    var pw = document.getElementById('password').value
    account.phrase = encryptWithAES(account.phrase, pw)
    accounts[newAccountKey] = account
    console.log(account)
    this.setState({accounts:accounts, accountSelected: newAccountKey})
    console.log('success')
    BACKGROUND.storage.set({'accounts': accounts, 'accountSelected': newAccountKey})
  }

  selectAccount = (accountKey) => {
    BACKGROUND.storage.set({'accountSelected': accountKey})
    this.setState({accountSelected:accountKey})
  }

  closeMenu = () => {
    if ( [this.state.isSearchOpen, this.state.isMoreOpen, this.state.isSettingsOpen, this.state.isAccountOpen].some((x) => x) ) {
      this.setState({ 
        isSearchOpen: false,
        isMoreOpen: false,
        isSettingsOpen: false,
        isAccountOpen: false
      });
    }
  }

  render = () =>  {
    return(
      <div>
        <div onClick={() => this.closeMenu()}>
         <AppContext.Provider value={{
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
         }}>
          <Header 
            toggleSearch={this.toggleSearch}
            toggleMore={this.toggleMore}
            toggleSettings={this.toggleSettings}
          />
          <MainContent />
          <MainButton />
         </AppContext.Provider>
        </div>
        {this.state.isSearchOpen && <ContentContainer
          content={<SearchContent togglePage={this.togglePage}/>}
          togglePage={this.togglePage}
        />}
        {this.state.isMoreOpen && <ContentContainer
          content={
            <MoreContent
              togglePage={this.togglePage} 
              toggleMore={this.toggleMore}
              toggleSettings={this.toggleSettings}
              newAccount={this.newAccount}
              page={this.state.page}
            />
          }
          togglePage={this.togglePage}
        />}
        {this.state.isAccountOpen && <ContentContainer
          content={
            <AccountMenuContent 
              BACKGROUND={BACKGROUND}
              togglePage={this.togglePage} 
              toggleAccountMenu={this.toggleAccountMenu}
              accounts={this.state.accounts}
              accountSelected={this.state.accountSelected}
              toggleAddAccount={this.toggleAddAccount}
              selectAccount={this.selectAccount}
            />
          }
          togglePage={this.togglePage}
        />}
        {this.state.isSettingsOpen && <ContentContainer
          content={
            <SettingsContent
              togglePage={this.togglePage} 
              toggleMore={this.toggleMore}
              toggleSettings={this.toggleSettings}
              newAccount={this.newAccount}
            />
          }
          togglePage={this.togglePage}
        />}
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


