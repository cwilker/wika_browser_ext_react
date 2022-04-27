import React from "react";
import AppContext from "../../utils/context";
import styled from 'styled-components';
import {MainFooter} from '../styles/footerStyles';
import {BodyCopy, Heading1} from '../styles/textStyle'

class WelcomeButton extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <MainFooter>
        <CenterButton>
          <MainButton onClick={() => this.context.togglePage(this.context.page, 'setup')}>
            <ButtonText>
              Get Started
            </ButtonText>
          </MainButton>
        </CenterButton>
      </MainFooter>
    )
  }
}

const CenterButton = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainButton =  styled.div` 
  border-radius: 100px;
  background: linear-gradient(345.46deg, #2EABE1 21.55%, #5BE2FF 170.6%);
  flex-basis: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background: linear-gradient(180deg, #3DB2E4 -110.22%, #005F88 171.17%);
  }
`
const ButtonText = styled.div`
  color: white;
  ${BodyCopy}
`

export default WelcomeButton;
