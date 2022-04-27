import React from 'react';
import styled from 'styled-components';
import {Main} from '../styles/contentStyle'

function WelcomePage() {
  return(
    <Main>
      <CenterImg>
        <StartImg className='welcomeimg' src="dist/images/gettingStarted.png"></StartImg>
      </CenterImg>
    </Main>
  )
}

const CenterImg = styled.div`
  flex:1;
  padding: 20px;
  padding-bottom: 90px;
  display:flex;
  align-items: center;
  justify-content: center;
`
const StartImg = styled.img`
  flex:1;
  max-width:100%;
  max-height:100%;
`
export default WelcomePage;