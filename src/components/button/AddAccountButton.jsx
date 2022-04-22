import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class AddAccount extends React.Component {
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
        <div onClick={() => {this.context.togglePage(this.context.page, 'generate2')}}>
          <Button content={
            <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
              Next Step
            </div>
          } />
        </div>
      </div>
    )
  }
}

export default AddAccount;