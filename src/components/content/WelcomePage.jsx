import React from 'react';
import styled from 'styled-components';

function WelcomePage() {
  return(
    <Wrapper>
      <div className='main'>
        <img className='welcomeimg' src="dist/images/gettingStarted.png"></img>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main {
    position: relative;
    background: #F9F9F9;
    height: 465px;
    width: 550px;
    outline: solid;
    outline-color: #DFE1E5;
  }
  .welcomeimg{
    position: relative;
    left: 6%;
    top: 7%;
    height: 260px;
  }
`

export default WelcomePage;