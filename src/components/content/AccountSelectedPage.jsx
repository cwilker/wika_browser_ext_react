import React from "react";
import AppContext from "../../utils/context";
import YourAccount from "./Account";
import MainAccountFunctions from '../MainAccountFunctions';
import styled from 'styled-components';
import {MainLabel, Padder} from '../styles/contentStyle';

class AccountSelectedPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (        
      <MainAccount>
        <Container>
          <YourAccountPad 
            toggleAccountMenu={this.context.toggleAccountMenu}
            page={this.context.page} 
            account={this.context.accounts[this.context.accountSelected]} 
          />
          <MainAccountFunctions page={this.context.page} accounts={this.context.accounts} accountSelected={this.context.accountSelected} togglePage={this.context.togglePage}/>
        </Container>
      </MainAccount>
    )
  }
}

const YourAccountPad = styled(YourAccount)`
  padding-bottom: 20px;
`
const MainAccount = styled(MainLabel)`
  background: #FFFFFF;
`
const Container = styled.div`
  padding: 20px;
  background: #FFFFFF;
`

export default AccountSelectedPage;
