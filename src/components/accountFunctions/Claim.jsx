import React from "react";
import Button from '../Button';
import buttonFunction from './ActionButtons'

class Claim extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage:  props.togglePage,
      claimUrl: props.claimUrl,
      claimUrlSelected: false
    }
  }

  dependentSend (claimUrlSelected) {
    if (claimUrlSelected) {
      return (
        <div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'claim')}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '214px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Clear
                </div>
              }
              />
          </div>
          <div className='bodycopy' style={{paddingTop:'25px'}}>
            Current Owner
          </div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' style={{width: '472px', height:'28px'}} 
                placeholder="your.url/to/claim" onChange={() => this.setState({claimUrl:document.getElementById('claimUrl').value})}
            >
            <div style={{padding:6}}>
              unclaimed
            </div>
            </div>
          </div>

          <div className='bodycopy' style={{paddingTop:'60px'}}>
            Preparation
          </div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' 
              style={{width: '142px', height:'28px', outlineColor: '#4493BD', cursor:'pointer'}} 
              onChange={() => this.setState({claimUrl:document.getElementById('claimUrl').value})}
            >
              <div style={{padding:6}}>
                1. Copy this
              </div>
            </div>
          </div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' 
              style={{width: '142px', height:'28px', outlineColor: '#A2C9DE'}} 
            >
              <div style={{padding:6}}>
                2. Insert it
              </div>
            </div>
          </div>
          <div style={{float: 'left', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' 
              style={{width: '142px', height:'28px', outlineColor: '#A2C9DE'}} 
            >
              <div style={{padding:6}}>
                3. Test it
              </div>
            </div>
          </div>

          <div style={{display: 'inline-block', paddingTop:'15px'}}
            onClick={() => this.state.togglePage(this.props.page, 'claim2')}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '472px', outlineColor: '#4493BD'}}
              content={
                <div style={{ padding:'8px', color:'white', textAlign:'center'}}>
                  Submit
                </div>
              }
              />
          </div>
          <div style={{textAlign:'center', paddingTop:4}}>
            {buttonFunction('claim', this.state.page, this.state.togglePage)}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.setState({claimUrlSelected:true})}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '214px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Lookup URL status
                </div>
              }
              />
          </div>
          <div style={{textAlign:'center', paddingTop: '192.5px'}}>
            {buttonFunction('claim', this.state.page, this.state.togglePage)}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
          <div className='bodycopy'>URL</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='claimUrl' type='text' className='mainText bodyCopy' style={{width: '224px', height:'28px'}} 
              placeholder="your.url/to/claim" onChange={() => this.setState({claimUrl:document.getElementById('claimUrl').value})}
            />
          </div>
          {this.dependentSend(this.state.claimUrlSelected)}
      </div>
    )
  }
}

export default Claim;