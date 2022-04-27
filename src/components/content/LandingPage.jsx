import React from 'react';
import AppContext from "../../utils/context";
import {MainLabel} from "../styles/contentStyle"
import {Heading1, Heading2} from "../styles/textStyle"
import styled from 'styled-components';
import AccountCarousel from "./LandingPage/AccountCarousel"
import Like from "./LandingPage/Like"
import Jdenticon from 'react-jdenticon';

class LandingPage extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    var account = this.context.accounts[this.context.accountSelected]
    return(
      <LandingPageStyle>
        <AccountCarousel/>
        <Like/>
      </LandingPageStyle>
    )
  }
}

const LandingPageStyle = styled(MainLabel)`
  background: linear-gradient(171.17deg, #B5FFB4 -41.33%, #E1F6FF 12.71%, #FFF496 105.58%, #FED5FF 154.44%);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default LandingPage;