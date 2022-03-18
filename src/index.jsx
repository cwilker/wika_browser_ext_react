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
      accountName: '<Account Name>',
      password: ''
  } ;
  return account ;
}

const generateAddAccount = () => {
  let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
  return importAccount(phrase) ;
}

const tmpGen = () => {
  let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
  return importAccount(phrase) ;
}

let accounts = {}
accounts['a1']= tmpGen()
accounts['a1']['key'] = 'a1'
accounts['a2']= tmpGen()
accounts['a2']['key'] = 'a2'
accounts['a3']= tmpGen()
accounts['a3']['key'] = 'a3'

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
      randomAccount: {}
    }
  }

  componentDidMount = () => {
    this.setState({page: 'welcome'});
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
  }

  addSelectAccount = (account) => {
    if (account.hasOwnProperty('key')) {
      let accounts = this.state.accounts
      accounts[account['key']] = account
      this.setState({accounts:accounts, accountSelected: account['key']})
    } else {
      let accounts = this.state.accounts
      let newAccountKey = 'a' + (Object.keys(accounts).length + 1)
      account['key'] = newAccountKey
      accounts[newAccountKey] = account
      this.setState({accounts:accounts, accountSelected: newAccountKey})
    }
  }

  selectAccount = (accountKey) => {
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

  render = () => {
    return(
      <div>
        <div onClick={() => this.closeMenu()}>
          <Header 
            page={this.state.page}
            toggleSearch={this.toggleSearch}
            toggleMore={this.toggleMore}
            toggleSettings={this.toggleSettings}
            togglePage={this.togglePage}
            accountSelected={this.state.accountSelected}
            accounts={this.state.accounts}
          />
          <ContentContainer 
            content={
              <MainContent 
                page={this.state.page} 
                togglePage={this.togglePage}
                toggleAddAccount={this.toggleAddAccount}
                addAccount={this.state.addAccount}
                accounts={this.state.accounts}
                accountSelected={this.state.accountSelected}
                selectAccount={this.selectAccount}
                addSelectAccount={this.addSelectAccount}
                randomAccount={this.state.randomAccount}
                importAccountFromPhrase={this.importAccountFromPhrase}
                toggleAccountMenu={this.toggleAccountMenu}
              />
            } 
          />
          <MainButton 
            page={this.state.page}
            togglePage={this.togglePage}
            toggleAddAccount={this.toggleAddAccount}
            addAccount={this.state.addAccount}
            previousPage={this.state.previousPage}
            newAccount={this.newAccount}
            addSelectAccount={this.addSelectAccount}
            randomAccount={this.state.randomAccount}
            selectAccount={this.selectAccount}
            />
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
            />
          }
          togglePage={this.togglePage}
        />}
        {this.state.isAccountOpen && <ContentContainer
          content={
            <AccountMenuContent 
              togglePage={this.togglePage} 
              toggleAccountMenu={this.toggleAccountMenu}
              accounts={this.state.accounts}
              accountSelected={this.state.accountSelected}
              toggleAddAccount={this.toggleAddAccount}
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


