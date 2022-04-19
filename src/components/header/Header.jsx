import React from 'react';

import AppContext from "../../utils/context";

class Header extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page
    }
  }

  titleSwitch = (page) => {
    switch (page['page']){
      case 'welcome':
        return 'Welcome to Wika!'
      case 'setup':
        return 'Setup'
      case 'account':
        return 'Account'
      case 'accountSelect':
        return 'Select Account'
      case 'like':
        return <div>Like URL <div className='bodyLabel' style={{display: 'inline-block', paddingLeft:'10px'}}>1/2</div></div>
      case 'like2':
        return <div>Like URL <div className='bodyLabel' style={{display: 'inline-block', paddingLeft:'10px'}}>2/2</div></div>
      case 'like3':
        return <div>Like URL </div>
      case 'buy':
        return 'Buy Wika'
      case 'send':
      case 'send2':
      case 'send3':
        return 'Send Wika'
      case 'claim':
      case 'claim2':
      case 'claim3':
        return 'Claim URL'
      case 'addAccount':
        return <div>Import Account <div className='bodyLabel' style={{display: 'inline-block', paddingLeft:'10px'}}>1/2</div></div>
      case 'generate':
        return <div>Create Account <div className='bodyLabel' style={{display: 'inline-block', paddingLeft:'10px'}}>1/2</div></div>
      case 'generate2':
        return <div>Secure Account <div className='bodyLabel' style={{display: 'inline-block', paddingLeft:'10px'}}>2/2</div></div>
      default:
         return 'work in progress'
      }
  }

  homeToggle = () => {
    if (this.context.accountSelected){
      this.context.togglePage(this.context.page, 'account')
    } else if (this.context.accounts){
      this.context.togglePage(this.context.page, 'accountSelect')
    } else {
      this.context.togglePage(this.context.page, 'welcome')
    }
  }

  cancleOrButtons(props) {
    switch (props.page){
      case 'generate':
      case 'generate2':
      case 'addAccount':
        return (
          <div 
            onClick={() => props.homeToggle()}
            className='bodyCopy' 
            style={{
              position: 'absolute',
              top: "22px",
              left: "475px",
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            cancel
          </div>
        )
      case 'welcome':
      case 'setup':
        return ''
      default:
        return (
          <div style={{
            position: 'absolute',
            top: "17px",
            left: "425px"
          }}>
            <img 
              title="Search"
              src="dist/images/extension/popup/user_interface/Magnifier.svg" 
              alt="search" style={{marginRight: '15px', height: '25px', cursor: 'pointer'}} 
              onClick={() => props.toggleSearch()}
              />
            <img 
              title="Menu"
              src="dist/images/extension/popup/user_interface/Plus Square.svg" 
              alt="more" style={{marginRight: '15px', height: '25px', cursor: 'pointer'}}
              onClick={() => props.toggleMore()}
              />
            <img 
              title="settings"
              src="dist/images/extension/popup/user_interface/Setting.svg" 
              alt="settings" style={{marginRight: '15px', height: '25px', cursor: 'pointer'}} 
              onClick={() => props.toggleSettings()}
            />
        </div>
        )
    }
  }

  render() {
    return (
      <div className="header heading1" style={{
        position: 'relative',
        background: '#F9F9F9',
        height:'60px',
        width: '550px'
      }}>
        <img className="logo" 
          onClick={() => this.homeToggle()}
          src="dist/images/extension/thumb/white.svg" alt="logo" 
          style={{
          position: 'absolute',
          top: "15px",
          left: "20px",
          height: "30px",
          cursor: 'pointer'
        }}/>
        <div style={{
          position: 'absolute',
          top: "19px",
          left: "70px"
        }}>
          <this.titleSwitch page={this.context.page} />
        </div>
          <this.cancleOrButtons 
            page={this.context.page}
            // togglePage={this.context.togglePage}
            toggleSearch={this.context.toggleSearch}
            toggleMore={this.context.toggleMore}
            homeToggle={this.homeToggle}
            toggleSettings={this.context.toggleSettings}
          />
      </div>
    )
  }
}

export default Header;