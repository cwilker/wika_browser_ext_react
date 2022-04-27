import React from "react";
import AppContext from "../../utils/context";
import styled from 'styled-components';
import {MainFooter} from '../styles/footerStyles';
import {BodyCopy, BodyLabel, Heading1} from '../styles/textStyle';

class MainNav extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <NavFooter>
        <NavIcons>
          <img src='dist/images/likeiconselected.svg'/>
          <Icon src='dist/images/BuyIcon.svg'/>
          <Icon src='dist/images/SendIcon.svg'/>
          <Icon src='dist/images/ClaimIcon.svg'/>
        </NavIcons>
      </NavFooter>
    )
  }
}

const NavFooter = styled.div`
  ${BodyCopy};
  background: #F9F9F9;
  display: flex;
  height:60px;
  align-items: center;
  justify-content: center;
`
const NavIcons = styled.div`
  display:flex;
  max-width: 400px;
  width: 60%;
  justify-content: space-between;
`
const Icon = styled.img`
  &:hover {
    filter: brightness(60%);
  }
`
const Buy = styled.span`
  background-image: 
`
const Send = styled.span`
  background-image: 
`
const More = styled.span`
  background-image: 
`

export default MainNav;