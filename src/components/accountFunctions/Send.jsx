import React from "react";
import Button from '../Button';
import buttonFunction from './ActionButtons'

class Send extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage:  props.togglePage,
      numLikes: props.numLikes,
      sendAddress: props.sendAddress,
      sendAddresSelected: false
    }
  }

  dependentSend (sendAddresSelected) {
    if (sendAddresSelected) {
      return (
        <div style={{display: 'inline-block',  paddingTop:'5px'}}>
          <Button className='mainText bodyCopy' 
            style={{width: '84px', outlineColor: '#4BA520'}}
            content={
              <div style={{float:'left', padding:'8px', color:'white'}}>
                Send
              </div>
            }
            backgroundColor='#4BA520'
            backgroundColorhover='#26620A'
            onClick={() => this.state.togglePage(this.props.page, 'send2')}
            />
        </div>
      )
    } else {
      return (
        <div style={{display: 'inline-block' }}>
          <Button className='mainText bodyCopy' 
            style={{width: '84px', outlineColor: '#BEE0AE', backgroundColor:'#BEE0AE'}}
            content={
              <div style={{float:'left', padding:'8px', color:'white'}}>
                Send
              </div>
            }
            />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '217px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '217px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>

        <div style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS TO SEND TO</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='sendAddress' type='text' className='mainText bodyCopy' style={{width: '366px', height:'28px'}} 
              placeholder="address" onChange={() => this.setState({sendAddress:document.getElementById('sendAddress').value})}
            />
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '74px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  {(this.state.sendAddresSelected)? "clear": "Lookup URL status"}
                </div>
              }
              onClick={() => this.setState({sendAddresSelected:true})}
              />
          </div>
        </div>
  
        <div style={{paddingTop:'35px'}}>
          <div className='bodyLabel'>NUMBER OF LIKES TO SEND</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='numLikes' type='number' className='mainText bodyCopy' style={{width: '144.6px', height:'28px'}} 
              value={this.state.numLikes} onChange={() => this.setState({numLikes:document.getElementById('numLikes').value})}
            />
          </div>

          <div style={{display: 'inline-block',  paddingTop:'5px', paddingRight:'20px'}}>
            <div className='mainText bodyCopy' style={{ width: '144.6px',}}>
              <div style={{float:'right', padding:'8px'}}>$ {(Math.round((this.state.numLikes * 0.05)*100)/100).toFixed(2)}</div>
            </div>
          </div>
          {this.dependentSend(this.state.sendAddresSelected)}
        </div>
  
        <div style={{textAlign:'center', paddingTop: '22px'}}>
          {buttonFunction('send', this.state.page, this.state.togglePage)}
        </div>
      </div>
    )
  }
}

export default Send;