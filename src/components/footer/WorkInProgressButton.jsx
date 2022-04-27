import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class WorkInProgress extends React.Component {
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
        <div>
          <Button content={
              <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                <div>Work in progress</div>
              </div>
            } 
            onClick={() => this.context.togglePage(this.context.page, 'welcome')}
          />
        </div>
      </div>
    )
  }
}

export default WorkInProgress;