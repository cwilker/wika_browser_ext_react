import React from 'react';
import Jdenticon from 'react-jdenticon';
import AppContext from "../../utils/context";
import styled from 'styled-components';
import {MainHeader} from '../styles/headerStyle'
import {Heading1, BodyCopy, BodyLabel} from '../styles/contentStyle';

class AccountHeader extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
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

  render() {
    var account = this.context.accounts[this.context.accountSelected]
    return (
      <AccountHeaderStyle>
        <WikaLogo
          onClick={() => this.homeToggle()}
          src="dist/images/extension/thumb/white.svg" alt="logo"
        />
        <WikaNetwork>
          <NetworkIcon>
            <svg width="11" height="11" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="7.44678" cy="7.45833" rx="7" ry="7.45833" fill="#50CC98"/>
            </svg>
          </NetworkIcon>
          <NetworkName>
            Wika TestNet
          </NetworkName>
          <DropDown>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.62012 1.5L8.18995 8L14.2905 1.5" stroke="#C2C2C2" stroke-width="2"/>
            </svg>
          </DropDown>
        </WikaNetwork>

        <JdenticonStyled>
          <Jdenticon size="25" value={account.address} />
        </JdenticonStyled>
      </AccountHeaderStyle>
    )
  }
}


const AccountHeaderStyle = styled(MainHeader)`
  justify-content: space-between;
`
const WikaLogo = styled.img`
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  height: 30px;
  padding: 0 0 0 15px;
`
const WikaNetwork = styled.div`
  background: white;
  border-radius: 100px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 5px 8px 5px 8px;
`
const NetworkIcon = styled.div`
  margin-right: 5px;
`
const NetworkName = styled.div`
  ${BodyCopy}
`
const DropDown = styled.div`
  margin-left: 5px;
`
const JdenticonStyled = styled.div`
  margin: 6px 10px 6px 6px;
  padding: 3px 3px 0px 3px;
  border: 2px solid;
  border-color: #FF9A64;
  border-radius: 6px;
  background-color: #FFFFFF;
  &:hover {
    background-color: #DFE1E5
  }
`
const AccountInfo = styled.div`
  flex:1.2;
  padding:3px
  ${BodyLabel}
`
const AccountName = styled.div`
  ${BodyCopy}
`

export default AccountHeader;