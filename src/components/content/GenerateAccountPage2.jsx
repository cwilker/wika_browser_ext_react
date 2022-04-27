import React from "react";
import AppContext from "../../utils/context";
import YourAccount from "./Account";
import styled from 'styled-components';
import {MainLabel, BodyLabel} from '../styles/contentStyle';

class GenerateAccountPage2 extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (   
      <GenAccount>
        <Container>
          <YourAccount  toggleAccountMenu={this.context.toggleAccountMenu} account={this.context.addAccount}  page={this.context.page} />
          <FormStyled>
            <FormRow>
              <div>
                ACCOUNT NAME
              </div>
              <MainText 
                id='accountName' type='text' placeholder='<Account Name>' autoComplete='username'
                onChange={() => {this.context.addAccount.accountName = document.getElementById('accountName').value}}
              />
            </FormRow>
            <FormRow>
              <div>
                A NEW PASSWORD FOR YOUR ACCOUNT
              </div>
              <MainText id='password' type='password' placeholder='<your password>' autoComplete='new-password'/>
            </FormRow>
            <FormRow>
              <div>
                CONFIRM PASSWORD
              </div>
              <MainText id='confirmPassword' type='password' placeholder='<your password>' autoComplete='new-password'/>
            </FormRow>
          </FormStyled>
        </Container>
      </GenAccount>     
    )
  }
}

const GenAccount = styled(MainLabel)`
  flex-direction: column;
`
const Container = styled.div`
  padding:20px;
`
const MainText = styled.input`
  border: none;
  position: relative;
  height: 30px;
  width: 100%;
  border-radius: 2px;
  outline: solid;
  outline-color: #DFE1E5;
`
const FormStyled = styled.form`
  margin-top: 30px;
`
const FormRow = styled.div`
  margin-bottom: 20px;
`

export default GenerateAccountPage2;

