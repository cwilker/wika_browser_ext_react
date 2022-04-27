import React from 'react';
import Jdenticon from 'react-jdenticon';
import AppContext from "../../utils/context";
import styled from 'styled-components';

class YourAccount extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
      account: props.account,
      style: props.style,
      content: props.content,
      selectAccount: props.selectAccount,
      page: props.page,
      className: props.className
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page,
      account: props.account
    }
  }

  renderSelectButtonOrOptions() {
    switch(this.context.page) {
      case 'accountSelect':
        return (
          <div>
            <div style={{position: 'absolute', top:'20px', left: '450px'}}>
              <img style={{height:'30px'}} src="dist/images/Select.svg"></img>
            </div>
          </div>
        )
      default:
        return(
          <AccountButtons>
            <EyeCopy>
              <img src="dist/images/extension/Outline/Status/Eye.svg"/>
              <img 
                title="copy address"
                src="dist/images/extension/Outline/Files/Copy.svg"
                style={{cursor: 'pointer'}}
                onClick={this.context.copyElement("account_address_element")}
              />
            </EyeCopy>  
            <Line 
              src="dist/images/extension/Vector 2.svg"/>
            <Hamburger 
              onClick={() => this.context.toggleAccountMenu()}
              src="dist/images/extension/User Interface/Menu.svg"></Hamburger>
          </AccountButtons>
        )
    }
  }

  render() {
    let style=this.props.style
    return (
      <MainAccount>
        <Identicon>
          <Jdenticon size={40} value={this.state.account.address}/>
        </Identicon>
        <AccountInfo>
          <AccountName className='accountName bodyCopy'>
            {this.state.account.accountName}
          </AccountName>
          <input id="account_address_element"
            type="text"
            className='accountAddress bodyLabel'
            value={this.state.account.address}
            readOnly={true}
          />
        </AccountInfo>
        <AccountButtonContainer>
          {this.renderSelectButtonOrOptions()}
        </AccountButtonContainer>
      </MainAccount>
    )
  }
}

const MainAccount = styled.div`
  border: solid;
  padding: 8px;
  border-color: #C2C2C2;
  border-radius: 10px;
  display:flex;
  align-items: center;
`
const Identicon = styled.div`
  margin: 3px;
  padding: 3px 3px 0px 3px;
  flex:0;
  background: white;
  border: solid;
  border-radius: 5px;
  border-color: #4493BD;
`
const AccountInfo = styled.div`
  flex:4;
  margin-left: 10px
`
const AccountName = styled.div`
  margin-bottom: 5px
`
const AccountButtonContainer = styled.div`
  flex:1;
`
const AccountButtons = styled.div`
  display:flex;
  align-items:center;
`
const EyeCopy = styled.div`
  cursor: pointer;
`
const Line = styled.img`
  padding-left: 10px;
`
const Hamburger = styled.img`
  cursor: pointer;
  height:30px;
`
export default YourAccount;