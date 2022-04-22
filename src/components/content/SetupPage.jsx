import React from "react";
import styled from 'styled-components';

const SetupPage = () => {
  return (
    <Wrapper>
      <div className='main'>
        <div className='wikaDescription'>
          <div>Wika Network is built in the Polkadot ecosystem. You can reuse an existing Polkadot address if you already have one, or create a new one from scratch.</div>
          <img className="thumbIcon" src='dist/images/extension/thumb/white.svg' ></img>
        </div>
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

  .wikaDescription{
    padding: 20px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: light;
    font-size: 13px;
  }
  
  .thumbIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 250px;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`

export default SetupPage;

