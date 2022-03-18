import React from 'react';
import Button from '../Button'

class SettingsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleMore: props.toggleMore
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
                LIGHT <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label> DARK
              </div>
            </div>
          } 
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />


        <Button className="bodyLabel moreRowTop"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip')}}>
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
        />

        <Button className="bodyLabel moreRowBottom"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip')}}>
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
        />
      </div>
    )
  }
}

export default SettingsContent;