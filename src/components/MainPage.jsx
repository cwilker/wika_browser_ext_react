import React from 'react';
import AppContext from "../utils/context";
import WelcomePage from "./content/WelcomePage"
import SetupPage from "./content/SetupPage"
import AddAccountPage from "./content/AddAccountPage"
import GenerateAccountPage from "./content/GenerateAccountPage"
import GenerateAccountPage2 from "./content/GenerateAccountPage2"
import AccountSelectPage from "./content/AccountSelectPage"
import AccountSelectedPage from "./content/AccountSelectedPage"
import WelcomeButton from "./button/WelcomeButton"
import MainFunctionButton from "./button/MainFunctionButton"
import AccountButton from "./button/AccountButton"
import SetupButton from "./button/SetupButton"
import AddAccount from "./button/AddAccountButton"
import Generate2 from "./button/Generate2Button"
import WorkInProgress from "./button/WorkInProgressButton"

import Header from "./MainHeader";



class MainPage extends React.Component {
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
        return (
          <WelcomeButton />
        )
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
        return(<MainFunctionButton />)
      case 'account':
        return(<AccountButton />)
      case 'setup':
        return (<SetupButton />)
      case 'addAccount':
      case 'generate':
        return(<AddAccount />)
      case 'generate2':
        return (<Generate2 />)
      case 'accountSelect':
        return (
          <div style={{
            position: 'relative',
            background: '#F9F9F9',
            height:'75px',
            width: '550px',
          }}></div>   
        )
      default:
        return (<WorkInProgress />)
    }
  }



  render() {
    switch(this.context.page) {
      case 'welcome':
        return(
          <div>
            <Header />
            <WelcomePage />
            <WelcomeButton />
          </div>
        )
      case 'setup':
        return(
          <div>
            <Header />
            <SetupPage />
            <SetupButton />
          </div>
        )
      case 'addAccount':
        return(
          <div>
            <Header />
            <AddAccountPage />
            <AddAccount />
          </div>
        )
      case 'generate':
        return(
          <div>
            <Header />
            <GenerateAccountPage/>
            <AddAccount />
          </div>
        )
      case 'generate2': 
        return(
          <div>
            <Header />
            <GenerateAccountPage2/>
            <Generate2 />
          </div>
        )
      case 'accountSelect':
        return(
          <div>
            <Header />
            <AccountSelectPage/>
            <div style={{
              position: 'relative',
              background: '#F9F9F9',
              height:'75px',
              width: '550px',
            }}></div> 
          </div>
        )
      case 'account':
        return(
          <div>
            <Header />
            <AccountSelectedPage />
            <AccountButton />
          </div>
        )
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
        return(
          <div>
            <Header />
            <AccountSelectedPage/>
            <MainFunctionButton />
          </div>
        )
      default:
        return (
          <div className='mainContent heading1'>
            <Header />
            work in progress
            <WorkInProgress />
          </div>
        )
    }
  }
}

export default MainPage;