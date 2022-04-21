import React from 'react';
import {copyToClipboard} from "./../utils/misc";
import AppContext from "../utils/context";
import WelcomePage from "./content/WelcomePage"
import SetupPage from "./content/SetupPage"
import AddAccountPage from "./content/AddAccountPage"
import GenerateAccountPage from "./content/GenerateAccountPage"
import GenerateAccountPage2 from "./content/GenerateAccountPage2"
import AccountSelectPage from "./content/AccountSelectPage"
import AccountSelectedPage from "./content/AccountSelectedPage"


class MainContent extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
    }
  }

  copyElement = (element) => () => {
    copyToClipboard(element) ;
  }

  setAccount = (phrase) => {
    if (phrase.split(' ').length % 12 === 0){
        try {
          var addAccount = this.context.importAccountFromPhrase(phrase);
          this.context.toggleAddAccount(addAccount)
        } catch (error) {
          alert(error);
        }
      }
    else {
      alert('phrase must be 12 or 24 words long')
    }
  }

  render() {
    switch(this.context.page) {
      case 'welcome':
        return(WelcomePage());
      case 'setup':
        return(SetupPage());
      case 'addAccount':
        return(AddAccountPage(this.context, this.copyElement, this.setAccount));
      case 'generate':
        return(GenerateAccountPage(this.context, this.copyElement));
      case 'generate2': 
        return(GenerateAccountPage2(this.context));
      case 'accountSelect':
        return(AccountSelectPage(this.context));
      case 'account':
      case 'like':
      case 'like2':
      case 'like3':
      case 'buy':
      case 'send':
      case 'send2':
      case 'send3':
      case 'claim':
      case 'claim2':
      case 'claim3':
        return(AccountSelectedPage(this.context))
      default:
        return (
          <div className='mainContent heading1'>
            work in progress
          </div>
        )
    }
  }
}

export default MainContent;