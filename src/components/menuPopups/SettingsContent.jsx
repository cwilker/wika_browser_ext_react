import React from 'react';
import Button from '../Button';
import AppContext from "../../utils/context";

class SettingsContent extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return(
      <div className="settings">
        <Button 
          className="bodyLabel moreRow"
          content={
            <div className="moreButtonBottom" >
              <div className="bodyLabel">
                THEME
              </div>
              <div className="bodyCopy">
                LIGHT <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label> DARK
              </div>
            </div>
          } 
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />


        <Button className="bodyLabel moreRowTop"
          content={
            <div className="moreButtonBottom">
              <img 
                src="dist/images/keyhole.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
              Manage Website Access
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
          onClick={() => {this.context.togglePage(this.props.page, 'wip')}}
        />

        <Button className="bodyLabel moreRowBottom"
          content={
            <div className="moreButtonBottom">
              <img 
                src="dist/images/window.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
              Open extension in new window
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
          onClick={() => {this.context.togglePage(this.props.page, 'wip')}}
        />
      </div>
    )
  }
}

export default SettingsContent;