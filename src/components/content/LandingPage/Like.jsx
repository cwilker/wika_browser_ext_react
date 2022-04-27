import React from 'react';
import AppContext from "../../../utils/context";
import {Heading1, Heading2} from "../../styles/textStyle"
import styled from 'styled-components';
import Jdenticon from 'react-jdenticon';

class Like extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    var account = this.context.accounts[this.context.accountSelected]
    return(
        <ActionPage>
          <Title>
            Like Current Page
          </Title>
          <FormStyled>
            <LikeInput type='number' placeholder={1}/>
            <LikeButton>
              LIKE
            </LikeButton>
          </FormStyled>
          <AuthorBadge>
            <img src="dist/images/checkmarks.svg"/>
            <URL>
              coolblog.com
            </URL>
            <NPageLikes>
              3.2k Likes
            </NPageLikes>
            <Jdenticon size="22" value="test value" />
          </AuthorBadge>
        </ActionPage>
    )
  }
}

const ActionPage = styled.div`
  background: white;
  height: 100px;
  flex-basis: 70%;
  width: 92%;
  max-width: 500px;
  border-radius: 30px 30px 0 0;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
  ${Heading1};
  font-weight: 700;
  color: #888888;
  padding: 15px 20px 0px 20px;
  border: 1px;
  border-color: #DFDBDB;
  border-style: none none solid none;
`
const FormStyled = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 35%;
`
const LikeInput = styled.input`
  ${Heading2}
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  border-style: none;
  height: 30px;
  width: 80%;
  border-radius: 8px;
`
const LikeButton = styled.div`
  border-radius: 100px;
  background: linear-gradient(345.46deg, #2EABE1 21.55%, #5BE2FF 170.6%);
  height: 40px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background: linear-gradient(180deg, #3DB2E4 -110.22%, #005F88 171.17%);
  }
  ${Heading1}
  color: white;
`
const AuthorBadge = styled.div`
  height: 25px;
  border: 1px;
  border-color: #DFDBDB;
  border-style: solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-width: 200px;
  margin-bottom: 20px;
`
const NPageLikes = styled.div`
  margin: 10px;
  background: #36B5E6;
  color: white;
  padding: 3px;
  display: flex;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`
const URL = styled.div`
  margin-left: 3px;
`
export default Like;