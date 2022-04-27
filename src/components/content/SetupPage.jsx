import React from "react";
import styled from 'styled-components';
import {Main, BodyCopy} from '../styles/contentStyle';

const SetupPage = () => {
  return (
      <Main>
        <WikaDescription>
          Wika Network is built in the Polkadot ecosystem. You can reuse an existing Polkadot address if you already have one, or create a new one from scratch.
          <ThumbContainer>
            <ThumbIcon src='dist/images/extension/thumb/white.svg' ></ThumbIcon>
          </ThumbContainer>
        </WikaDescription>
      </Main>
  )
}

const WikaDescription = styled.div`
  padding: 40px;
  ${BodyCopy};
`
const ThumbContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const ThumbIcon = styled.img`
  height: 250px;
  filter: drop-shadow(3px 3px 5px rgb(0 0 0 / 0.2));

` 

export default SetupPage;

