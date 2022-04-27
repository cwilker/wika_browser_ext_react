import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";
import YourAccount from "./Account";
import styled from 'styled-components';
import {MainLabel, BodyCopy} from '../styles/contentStyle';

class AddAccountPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <MainLabel>
        <Container>
          <AccountStyled>
            <YourAccount toggleAccountMenu={this.context.toggleAccountMenu} account={ this.context.addAccount } page={this.context.page} />
          </AccountStyled>
          <SeedContainer>
            EXISTING 12 OR 24 WORD MNEMONIC SEED
            <SeedBox id='importSeed' defaultValue='' type='text'/>
            <CopyBox onClick={this.context.copyElement('importSeed')}>
              <CopyLogo src='dist/images/extension/Outline/Files/Copy.svg'/>
              COPY TO CLIPBOARD
            </CopyBox>
          </SeedContainer>
          <ButtonContainer>
            <MainButton onClick={() => {this.context.setAccount(document.getElementById('importSeed').value)}}>
              <ImportText>
                Import
              </ImportText>
            </MainButton>
          </ButtonContainer>
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
  ${'' /* justify-content: space-between; */}
`

const AccountStyled = styled.div`
  flex:3;
`
const SeedContainer = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ButtonContainer = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
`
const SeedBox = styled.textarea`
  flex:1;
  padding: 10px;
  height: 40px;
  background: #FFFFFF;
  outline: solid;
  outline-color: #DFE1E5;
  color:#A77121;
`
const MainButton = styled.div`
  ${BodyCopy};
  border-radius: 10px;
  background: linear-gradient(345.46deg, #2EABE1 21.55%, #5BE2FF 170.6%);
  &:hover {
    background: linear-gradient(180deg, #3DB2E4 -110.22%, #005F88 171.17%);
  }
  flex-basis: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
const ImportText = styled.div`
  font-weight:  light;
  text-align: center;
  color: white;
`
const CopyBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center
`
const CopyLogo = styled.img`
  float: left;
  position: relative;
  cursor: pointer;
`

export default AddAccountPage;
