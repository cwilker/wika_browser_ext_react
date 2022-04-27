import React from 'react';
import AppContext from "../../utils/context";
import styled from 'styled-components';
import {MainHeader} from '../styles/headerStyle.jsx'
import {Heading1, BodyCopy, BodyLabel} from '../styles/contentStyle';


class SetupHeader extends React.Component {
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
          <Cancel 
            onClick={() => props.homeToggle()}>
              cancel
          </Cancel>
        )
      case 'welcome':
      case 'setup':
        return ''
      default:
        return (
          <HeaderIcons>
            <Icon 
              title="Search"
              src="dist/images/extension/popup/user_interface/Magnifier.svg" 
              alt="search"  
              onClick={() => props.toggleSearch()}
              />
            <Icon 
              title="Menu"
              src="dist/images/extension/popup/user_interface/Plus Square.svg" 
              alt="more" 
              onClick={() => props.toggleMore()}
              />
            <Icon 
              title="settings"
              src="dist/images/extension/popup/user_interface/Setting.svg" 
              alt="settings"  
              onClick={() => props.toggleSettings()}
            />
        </HeaderIcons>
        )
    }
  }

  render() {
    return (
      <MainHeader>
        <WikaLogoFlex>
          <WikaLogo
            onClick={() => this.homeToggle()}
            src="dist/images/extension/thumb/white.svg" alt="logo"
          />
        </WikaLogoFlex>
        <Title>
          <this.titleSwitch page={this.context.page} />
        </Title>
          <this.cancleOrButtons 
            page={this.context.page}
            toggleSearch={this.context.toggleSearch}
            toggleMore={this.context.toggleMore}
            homeToggle={this.homeToggle}
            toggleSettings={this.context.toggleSettings}
          />
      </MainHeader>
    )
  }
}

const WikaLogoFlex = styled.div`
  flex:.4;
`
const WikaLogo = styled.img`
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  height: 30px;
  padding: 0 0 0 15px
`
const Title = styled.div`
  flex:1.6;
`
const HeaderIcons = styled.div`
  flex:0.6;
  display: flex;
  justify-content: center;
  padding-right: 10px
`
const Icon = styled.img`
  flex:1;
  height:25px;
  cursor: pointer;
`
const Cancel = styled.div`
  flex: .3;
  text-decoration: underline;
  cursor: pointer;
  ${BodyCopy};
`

export default SetupHeader;