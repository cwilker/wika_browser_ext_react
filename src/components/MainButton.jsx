import React from 'react';
import AppContext from "../utils/context";
import WelcomeButton from "./button/WelcomeButton"
import MainFunctionButton from "./button/MainFunctionButton"
import AccountButton from "./button/AccountButton"
import SetupButton from "./button/SetupButton"
import AddAccount from "./button/AddAccountButton"
import Generate2 from "./button/Generate2Button"
import WorkInProgress from "./button/WorkInProgressButton"

class MainButton extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page
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
}

export default MainButton;