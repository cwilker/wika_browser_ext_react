import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class SetupButton extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div style={{display:'inline'}}>
        <div style={{
          position: 'relative',
          float:'left',
          background: '#F0F0F0',
          height:'75px',
          width: '275px',
        }}>
          <div onClick={() => {this.context.togglePage(this.context.page, 'generate'); this.context.newAccount()}}>
            <Button content={
              <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                Create Account
              </div>
            } style={{width: '220px'}}
            />
          </div>
        </div>
        <div style={{
          float:'left',
          position: 'relative',
          background: '#F0F0F0',
          height:'75px',
          width: '275px',
        }}>
          <div onClick={() => this.context.togglePage(this.context.page, 'addAccount')}>
            <Button content={
              <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                Import Account
              </div>
            }  style={{width: '220px'}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SetupButton;