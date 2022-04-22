import React from 'react';
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

  render() {
    switch(this.context.page) {
      case 'welcome':
        return(<WelcomePage />);
      case 'setup':
        return(<SetupPage />);
      case 'addAccount':
        return(<AddAccountPage />)
      case 'generate':
        return(<GenerateAccountPage/>)
      case 'generate2': 
        return(<GenerateAccountPage2/>)
      case 'accountSelect':
        return(<AccountSelectPage/>)
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
        return(<AccountSelectedPage/>)
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