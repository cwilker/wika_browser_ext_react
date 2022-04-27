import React, {useContext} from "react";
import YourAccount from "./Account";
import AppContext from "../../utils/context";
import styled from 'styled-components';
import {MainLabel, Padder} from '../styles/contentStyle';
import {BodyCopy} from '../styles/textStyle';

class GenerateAccountPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <MainLabel>
          <Container>
            <YourAccount  toggleAccountMenu={this.context.toggleAccountMenu} account={this.context.addAccount}  page={this.context.page} />
            <SeedContainer>
              GENERATED 12-WORD MNEMONIC SEED 
              <SeedBox id='seed' defaultValue={this.context.addAccount.phrase} >
              </SeedBox>
              <Copy onClick={this.context.copyElement('seed')} >
                <CopyIcon src='dist/images/extension/Outline/Files/Copy.svg'></CopyIcon>
                COPY TO CLIPBOARD
              </Copy>
            </SeedContainer>
            <MnemonicWarning>
              <img src='dist/images/extension/User Interface/exclamation triangle.svg'/>
              <MnemonicMessage>
                Please write down your wallet's mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.
              </MnemonicMessage>
            </MnemonicWarning>

            <MnemonicWarning>
              <input type='checkbox' />
              <MnemonicMessage>
                I have saved my mnemonic seed safely
              </MnemonicMessage>
            </MnemonicWarning>
          </Container>
        </MainLabel>
    )
  }
}

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`
const SeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Copy = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
const CopyIcon = styled.img`
  margin-right: 5px;
`
const MnemonicWarning = styled.div`
  display: flex;
  align-items: center;
`
const MnemonicMessage = styled.div`
  margin-left: 5px;
`
const SeedBox = styled.textarea`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  height: 40px;
  background: #FFFFFF;
  outline: solid;
  outline-color: #DFE1E5;
  color:#A77121;
`
export default GenerateAccountPage