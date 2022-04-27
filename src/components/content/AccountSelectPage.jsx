import React from "react";
import AppContext from "../../utils/context";
import YourAccount from "./Account";
import styled from 'styled-components';
import {MainLabel, BodyCopy, Padder, SeedBox} from '../styles/contentStyle';

class AccountSelectPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    let accountArray = Object.values(this.context.accounts)
    let accountKeys = Object.keys(this.context.accounts)
    const accountInfo = accountArray.map((account, i) =>{
      return (
        <Padder paddingBottom='20px' key={i}>
          <MainButton onClick={() => {this.context.togglePage(this.context.page, 'account'); this.context.selectAccount(accountKeys[i])}}>
            <YourAccount 
              toggleAccountMenu={this.context.toggleAccountMenu} 
              account={accountArray[i]}
              page={this.context.page} 
            />
          </MainButton>
        </Padder>
      )
    })
    return (
      <MainLabel>
        <Padder padding='20px'>
          {accountInfo}
        </Padder>
      </MainLabel>
    )
  }
}

const MainButton = styled.button`
  ${BodyCopy};
  border: none;
  position: relative;
  height: 30px;
  width: 100%;
  background-color:white;
` 

export default AccountSelectPage;
