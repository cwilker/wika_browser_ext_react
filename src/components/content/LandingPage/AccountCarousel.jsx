import React from 'react';
import AppContext from "../../../utils/context";
import {Heading1, BodyCopy} from "../../styles/textStyle"
import styled from 'styled-components';

class AccountCarousel extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    var account = this.context.accounts[this.context.accountSelected]
    return(
        <CarouselContainer>
          <CarouselButtons>
            <img src="dist/images/carouselArrowLeft.svg"/>
          </CarouselButtons>
          <AccountContainter>
            <AccountCarouselTop>
              <AccountName>
                {account.accountName}
              </AccountName>
              <AccountIcons>
                <Send src="dist/images/sendNew.svg"/>
                <Plus src="dist/images/plus.svg"/>
              </AccountIcons>
            </AccountCarouselTop>
            <AccountCarouselBottom>
              <Balance>
                32,000.20
              </Balance>
              <Currency>
                WIKA
              </Currency>
              <Dollars>
                $32.00
              </Dollars>
            </AccountCarouselBottom>
          </AccountContainter>
          <CarouselButtons>
            <img src="dist/images/carouselArrowRight.svg"/>
          </CarouselButtons>
        </CarouselContainer>
    )
  }
}

const CarouselContainer = styled.div`
  padding:20px;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 80%
`
const CarouselButtons = styled.div`
  margin: 20px;
`
const AccountContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 220px;
  flex-basis: 90%;
`
const AccountCarouselTop = styled.div`
  background: white;
  height: 45px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AccountCarouselBottom = styled.div`
  background: white;
  height: 45px;
  border-radius: 0 0 10px 10px;
  border: 1px;
  border-color: #DFDBDB;
  border-style: solid none none none;
  display: flex;
  align-items: center;
`
const AccountName = styled.div`
  ${Heading1};
  font-weight: 700;
  color: #888888;
  margin-left: 10px;
`
const AccountIcons = styled.div`
  display: flex;
  align-items: center;
`
const Send = styled.img`
  margin-right: 5px;
`
const Plus = styled.img`
  padding-top: 3px;
  margin-right: 10px;
`
const Balance = styled.div`
  ${Heading1};
  margin-left: 10px;
  margin-right: 3px;
`
const Currency = styled.div`
  ${BodyCopy}
  margin-top: 4px;
  padding-right: 
`
const Dollars = styled.div`
  ${Heading1};
  margin-left: 10px;
  color: #888888;
`
export default AccountCarousel;