import React from 'react';
import AppContext from "../utils/context";
import WelcomePage from "./content/WelcomePage";
import SetupPage from "./content/SetupPage";
import AddAccountPage from "./content/AddAccountPage";
import GenerateAccountPage from "./content/GenerateAccountPage";
import GenerateAccountPage2 from "./content/GenerateAccountPage2";
import AccountSelectPage from "./content/AccountSelectPage";
import AccountSelectedPage from "./content/AccountSelectedPage";
import WIPpage from "./content/WorkInProgressPage";
import LandingPage from "./content/LandingPage"
import WelcomeButton from "./footer/WelcomeButton";
import MainFunctionButton from "./footer/MainFunctionButton";
import AccountButton from "./footer/AccountButton";
import SetupButton from "./footer/SetupButton";
import AddAccount from "./footer/AddAccountButton";
import Generate2 from "./footer/Generate2Button";
import WorkInProgress from "./footer/WorkInProgressButton";
import MainNav from "./footer/MainNav"

import SetupHeader from "./header/SetupHeader";
import AccountHeader from "./header/AccountHeader";

class MainPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  EmptyFooter() {
    return (
      <div style={{
        position: 'relative',
        background: '#F9F9F9',
        height:'75px',
        width: '442px',
      }}></div> 
    )
  }

  render() {

    const component_map = {
      'welcome': {
        header: SetupHeader,
        content: WelcomePage,
        footer: WelcomeButton,
      },
      'setup': {
        header: SetupHeader,
        content: SetupPage,
        footer: SetupButton,
      },
      'addAccount': {
        header: SetupHeader,
        content: AddAccountPage,
        footer: AddAccount,
      },
      'generate': {
        header: SetupHeader,
        content: GenerateAccountPage,
        footer: AddAccount,
      },
      'generate2': {
        header: SetupHeader,
        content: GenerateAccountPage2,
        footer: Generate2,
      },
      'accountSelect': {
        header: SetupHeader,
        content: AccountSelectPage,
        footer: this.EmptyFooter,
      },
      'account': {
        header: AccountHeader,
        content: LandingPage,
        footer: MainNav,
      },
      'wip': {
        header: SetupHeader,
        content: WIPpage,
        footer: WorkInProgress,
      },
    }
    // case 'like':
    // case 'like2':
    // case 'like3':
    // case 'buy':
    // case 'send':
    // case 'send2':
    // case 'send3':
    // case 'claim':
    // case 'claim2':
    // case 'claim3':

    const CurrentHeader = component_map[this.context.page]['header']
    const CurrentBody = component_map[this.context.page]['content']
    const CurrentFooter = component_map[this.context.page]['footer']
    return(
      <div>
        <CurrentHeader />
        <CurrentBody />
        <CurrentFooter />
      </div>
    )
  }
}

export default MainPage;