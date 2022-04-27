import React from "react";
import AppContext from "../../utils/context";
import styled from 'styled-components';
import {MainFooter} from '../styles/footerStyles';
import {BodyCopy, BodyLabel, Heading1} from '../styles/textStyle'


class Generate2 extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <MainFooter>
        <BackContainer >
          <BackButton onClick={() => {this.context.togglePage(this.context.page, this.context.previousPage)}}>
            <ButtonText className='bodyCopy' style={{padding: '12px', color: "white"}}>
              &#60;
            </ButtonText>
          </BackButton>
        </BackContainer>
        <NextContainer >
          <NextButton 
            onClick={() => {this.context.togglePage(this.context.page, 'account'); this.context.addSelectAccount(this.context.addAccount); this.context.toggleAddAccount({accountName:'<Account Name>', address:'N/A'})}}
          >
            <ButtonText className='bodyCopy' style={{padding: '14px', color: "white"}}>
              Next Step
            </ButtonText>
          </NextButton>
        </NextContainer>
      </MainFooter>
    )
  }
}

const BackContainer = styled.div`
  flex:2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 20px;
`
const NextContainer = styled.div`
  flex:7;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BackButton =  styled.div`
  border-radius: 100px;
  background: #303D48;
  &:hover {
    background: black;
  }
  flex-basis: 50%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
const NextButton =  styled.div`
  border-radius: 100px;
  background: linear-gradient(345.46deg, #2EABE1 21.55%, #5BE2FF 170.6%);
  &:hover {
    background: linear-gradient(180deg, #3DB2E4 -110.22%, #005F88 171.17%);
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

export default Generate2;