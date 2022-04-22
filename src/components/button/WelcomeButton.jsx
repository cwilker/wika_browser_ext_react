import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class WelcomeButton extends React.Component {
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
        <div onClick={() => this.context.togglePage(this.context.page, 'setup')}>
          <Button content={
            <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
              Get Started
            </div>
          } />
        </div>
      </div>
    )
  }
}

export default WelcomeButton;