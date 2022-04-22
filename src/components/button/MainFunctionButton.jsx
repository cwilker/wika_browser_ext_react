import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class MainFunctionButton extends React.Component {
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
        <div onClick={() => this.context.togglePage(this.context.page, 'account')}>
          <Button content={
            <div id='asdf' className='bodyCopy' 
              style={{padding: '14px', color: "white"}} 
            >
              Back
            </div>
          } 
          backgroundColor='#303D48' backgroundColorhover='black'
          />
        </div>
      </div>
    )
  }
}

export default MainFunctionButton;