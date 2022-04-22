import React, {useContext} from "react";
import YourAccount from "./Account";
import styled from 'styled-components';
import AppContext from "../../utils/context";

class GenerateAccountPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Wrapper>
        <div className='main'>
          <Padder padding="20px" >
            <YourAccount  toggleAccountMenu={this.context.toggleAccountMenu} account={this.context.addAccount}  page={this.context.page} />
            <Padder paddingTop='25px'>
              <Padder padding="5px">
                GENERATED 12-WORD MNEMONIC SEED 
              </Padder>
              <textarea id='seed' className='seedBox' defaultValue={this.context.addAccount.phrase} >
              </textarea>
              <div  className='copy' onClick={this.context.copyElement('seed')}  
              >
                <img className='copyText' src='dist/images/extension/Outline/Files/Copy.svg'></img>
                COPY TO CLIPBOARD
              </div>
              <Padder paddingTop='40px' >
                <img className='mnemonicWarning' src='dist/images/extension/User Interface/exclamation triangle.svg'></img>
                Please write down your wallet's mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.
              </Padder>
              <Padder paddingTop="120px">
                <div className='mnemonicWarning'>
                  <input type='checkbox' />
                </div>
                I have saved my mnemonic seed safely
              </Padder>
            </Padder>
          </Padder>
        </div>
      </Wrapper>
    )
  }
}

const Padder = styled.div`
  padding: ${props => props.padding || '0px'};
  padding-top: ${props => props.paddingTop || props.padding || '0px'}
`

const Wrapper = styled.div`
  .main {
    position: relative;
    background: #F9F9F9;
    height: 465px;
    width: 550px;
    outline: solid;
    outline-color: #DFE1E5;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
  }

  .copy {
    padding-top: 40px;
    cursor: pointer;
  }

  .copyText {
    float: left;
    position: relative;
    top: -10px;
    padding-right: 10px;
  }

  .mnemonicWarning {
    float: left;
    position: relative;
    top: -2px;
    padding-right: 10px;
  }
`

export default GenerateAccountPage