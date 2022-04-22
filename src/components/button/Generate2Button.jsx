import React from "react";
import AppContext from "../../utils/context";
import Button from "../Button";

class Generate2 extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return(
      <div style={{
        position: 'relative',
        background: '#F0F0F0',
        height:'75px',
        width: '550px',
      }}>
        <div style={{
          position: 'relative',
          float:'left',
          background: '#F0F0F0',
          height:'75px',
          width: '80px'
        }}>
          <div onClick={() => {this.context.togglePage(this.context.page, this.context.previousPage)}}>
            <Button 
              content={
                <div className='bodyCopy' style={{padding: '12px', color: "white"}}>
                  &#60;
                </div>
              } style={{width: '50px', left:'52.5px'}
              } backgroundColor='#303D48' backgroundColorhover='black'
            />
          </div>
        </div>
        <div style={{
          float:'left',
          position: 'relative',
          background: '#F0F0F0',
          height:'75px',
          width: '470px'
        }}>
          <div onClick={() => {this.context.togglePage(this.context.page, 'account'); this.context.addSelectAccount(this.context.addAccount); this.context.toggleAddAccount({accountName:'<Account Name>', address:'N/A'})}}>
            <Button 
              content={
                <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                  Next Step
                </div>
              }
              style={{width: '415px',left:'235px'}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Generate2;