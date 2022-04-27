import React from 'react';
import ReactDOM from 'react-dom';
import { delay } from 'rxjs';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

import BACKGROUND from '../utils/global';
import {encryptWithAES, decryptWithAES, bytesToHex, importAccount, generateAddAccount} from '../utils/misc';
import '../css/index.css';
import {parseError, copyToClipboard} from "../utils/misc";
import MoreContent from './menuPopups/MoreContent'
import SearchContent from './menuPopups/searchContent';
import AccountMenuContent from './menuPopups/AccountMenuContent';
import SettingsContent  from './menuPopups/SettingsContent';
import WikaNetwork from '../utils/network';
import AppContext from '../utils/context' ;
import MainPage from './MainPage'

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome to Wika!",
      isSearchOpen: false,
      isMoreOpen: false,
      isSettingsOpen: false,
      isAccountOpen: false,
      addAccount: {accountName:'<Account Name>', address:'N/A'},
      previousPage: '',
      accounts: {'a1':{accountName:'<Account Name>', address:'N/A'}},
      accountSelected: 'a1',
      randomAccount: {},
      page: 'account'
    }
  }

  componentDidMount = async () => {
    let network = new WikaNetwork() ;
    await network.connect(() => {
        BACKGROUND.network = network ;
        console.log('connected') ;
    }) ;
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

  copyElement = (element) => () => {
    copyToClipboard(element) ;
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

  setAccount = (phrase) => {
    if (phrase.split(' ').length % 12 === 0){
        try {
          var addAccount = this.importAccountFromPhrase(phrase);
          this.toggleAddAccount(addAccount)
        } catch (error) {
          alert(error);
        }
      }
    else {
      alert('phrase must be 12 or 24 words long')
    }
  }

  selectAccount = (accountKey) => {
    BACKGROUND.storage.set({'accountSelected': accountKey})
    this.setState({accountSelected:accountKey})
  }

  disconnectAccount = () => {
    this.selectAccount('')
    this.togglePage(this.state.page, 'accountSelect')
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
            toggleSearch: this.toggleSearch,
            toggleMore: this.toggleMore,
            toggleSettings: this.toggleSettings,
            copyElement: this.copyElement,
            setAccount: this.setAccount,
            disconnectAccount: this.disconnectAccount,
            BACKGROUND: BACKGROUND
         }}>
          <MainPage />
          {this.state.isSearchOpen && <SearchContent/>}
          {this.state.isMoreOpen && <MoreContent/>}
          {this.state.isAccountOpen && <AccountMenuContent/>}
          {this.state.isSettingsOpen && <SettingsContent/>}
         </AppContext.Provider>
        </div>
      </div>
    )
  }
}

export default MainApp ;