import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";
import styled from 'styled-components';
import {MainFooter} from '../styles/footerStyles';
import {BodyCopy, BodyLabel, Heading1} from '../styles/textStyle'


class MainFunctionButton extends React.Component {
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
          <MainButton onClick={() => this.context.togglePage(this.context.page, 'account')}>
            <ButtonText>
              Back
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
  background: #303D48;
  &:hover {
    background: black;
  }
  flex-basis: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
const ButtonText = styled.div`
  color: white;
  ${BodyCopy}
`

export default MainFunctionButton;