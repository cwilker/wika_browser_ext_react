import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class AccountButton extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div style={{
        position: 'relative',
        background: '#F0F0F0',
        height:'75px',
        width: '550px',
      }}>
        <div onClick={() => this.context.disconnectAccount()}>
          <img></img>
          <Button content={
            <div className='bodyCopy' 
              style={{padding: '14px', color: "white"}} 
            >
              Disconnect Account
            </div>
          } 
          backgroundColor='#303D48' backgroundColorhover='black'
          />
        </div>
      </div>
    )
  }
}

export default AccountButton;