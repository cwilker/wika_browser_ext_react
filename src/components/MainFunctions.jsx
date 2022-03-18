import React from "react";
import Button from './Button';

class MainFunctinos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage:  props.togglePage,
      numLikes: 1,
      likeURL: 'https://www.wika.network/',
      sendAddress: '5GWEiv2fSRoeaXwhTCP1qvnJRT8BVnXnTL8CVsnP8M3G7z2i',
      claimAddress: 'https://www.wika.network/'
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page
    }
  }

  buttonFunction = (button) => {

    let lightButton = {
      like: '',
      buy: '',
      send: '',
      claim: ''
    }
    lightButton[button] = 'Light'

    return (
      <div>
        <Button content={
          <img 
            style={{padding:'12px' }} src={"dist/images/Like" + lightButton['like'] + ".svg"}
            onClick={() => this.state.togglePage(this.props.page, 'like')}
          />
          } 
          className='asdf'
          style={{display: 'inline-block'}}
          backgroundColor='white'
          backgroundColorhover='#E7E7E7'
        />
        <Button content={
            <img 
              style={{padding:'12px'}} src={"dist/images/Buy" + lightButton['buy'] + ".svg"}
              onClick={() => this.state.togglePage(this.props.page, 'buy')}
            />
          } 
          className='asdf'
          style={{display: 'inline-block'}}
          backgroundColor='white'
          backgroundColorhover='#E7E7E7'
        />
        <Button content={
            <img 
              style={{padding:'12px'}} src={"dist/images/Send" + lightButton['send'] + ".svg"}
              onClick={() => this.state.togglePage(this.props.page, 'send')}
            />
          } 
          className='asdf'
          style={{display: 'inline-block'}}
          backgroundColor='white'
          backgroundColorhover='#E7E7E7'
        />
        <Button content={
            <img 
              style={{padding:'12px'}} src={"dist/images/Claim" + lightButton['claim'] + ".svg"}
              onClick={() => this.state.togglePage(this.props.page, 'claim')}
            />
          } 
          className='asdf'
          style={{display: 'inline-block'}}
          backgroundColor='white'
          backgroundColorhover='#E7E7E7'
        />
      </div>
    )
  }

  account(){
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>
  
        <div  style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS (SUBSTRATE FORMAT)</div>
          <div style={{paddingTop:'5px'}}>
            <div className='mainText' >
              <div style={{padding:'10px'}}>
                {this.props.accounts[this.props.accountSelected].address}
              </div>
            </div>
          </div>
        </div>
  
        <div  style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS (RAW HEX FORMAT)</div>
          <div style={{paddingTop:'5px'}}>
            <div className='mainText' >
            <div style={{padding:'10px'}}>
                {this.props.accounts[this.props.accountSelected].addressRaw}
              </div>
            </div>
          </div>
        </div>
  
        <div style={{textAlign:'center', paddingTop: '25px'}}>
          {this.buttonFunction('')}
        </div>
      </div>
    )
  }

  like(){
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>

        <div style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>URL</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='likeURL' type='text' className='mainText bodyCopy' style={{width: '224px', height:'28px'}} 
              placeholder="your.url/to/like" onChange={() => this.setState({likeURL:document.getElementById('likeURL').value})}
            />
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'like2')}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '224px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Lookup URL status
                </div>
              }
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
          <div style={{display: 'inline-block' }}>
            <Button className='mainText bodyCopy' 
              style={{width: '84px', outlineColor: '#BEE0AE', backgroundColor:'#BEE0AE'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Like
                </div>
              }
              />
          </div>
        </div>
  
        <div style={{textAlign:'center', paddingTop: '22px'}}>
          {this.buttonFunction('like')}
        </div>
      </div>
    )
  }

  like2(){
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>

        <div style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>URL</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div className='mainText bodyCopy' style={{ width: '228px', background:'#E7E7E7'}}>
              <div style={{float:'left', paddingTop:'7.5px', paddingLeft:'2px'}}>
                {this.state.likeURL}
              </div>
            </div>
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => {this.state.togglePage(this.props.page, 'like') ; this.setState({likeURL:'https://app.wika.network/#'})}}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '224px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Clear
                </div>
              }
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
          <div style={{display: 'inline-block',  paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'like3')}>
            <Button className='mainText bodyCopy' 
              style={{width: '84px', outlineColor: '#4BA520'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Like
                </div>
              }
              backgroundColor='#4BA520'
              backgroundColorhover='#26620A'
              />
          </div>
        </div>

        <div style={{textAlign:'center', paddingTop: '22px'}}>
          {this.buttonFunction('like')}
        </div>
      </div>
    )
  }

  like3(){
    return (
      <div>
        <img 
          src="dist/images/extension/thumb/white.svg" 
          alt="logo" className='logo sent' style={{ 
            height: '150px'}} 
          />
        <div className="heading1 thanks" >
          Thank you for your support!
        </div>
        <div className="bodyCopy thanks" style={{top:'78%', width:'100%'}}>{this.state.likeURL} has received your like</div>
      </div>
    )
  }

  buy(){
    return (
      <div>
        Work in progress
        <div style={{textAlign:'center', paddingTop: '230px'}}>
          {this.buttonFunction('buy')}
        </div>
      </div>
    )
  }

  send(){
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>

        <div style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS TO SEND TO</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='sendAddress' type='text' className='mainText bodyCopy' style={{width: '376px', height:'28px'}} 
              placeholder="address" onChange={() => this.setState({sendAddress:document.getElementById('sendAddress').value})}
            />
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'send2')}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '74px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Lookup 
                </div>
              }
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
          <div style={{display: 'inline-block' }}>
            <Button className='mainText bodyCopy' 
              style={{width: '84px', outlineColor: '#BEE0AE', backgroundColor:'#BEE0AE'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Like
                </div>
              }
              />
          </div>
        </div>
  
        <div style={{textAlign:'center', paddingTop: '22px'}}>
          {this.buttonFunction('send')}
        </div>
      </div>
    )
  }

  send2(){
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '227px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>

        <div style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS TO SEND TO</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div className='mainText bodyCopy' style={{ width: '380px', background:'#E7E7E7'}}>
              <div style={{float:'left', paddingTop:'7.5px', paddingLeft:'2px'}}>
                {this.state.sendAddress}
              </div>
            </div>
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => {this.state.togglePage(this.props.page, 'send') ; this.setState({likeURL:'https://app.wika.network/#'})}}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '74px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Clear
                </div>
              }
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
          <div style={{display: 'inline-block',  paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'send3')}>
            <Button className='mainText bodyCopy' 
              style={{width: '84px', outlineColor: '#4BA520'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Send
                </div>
              }
              backgroundColor='#4BA520'
              backgroundColorhover='#26620A'
              />
          </div>
        </div>

        <div style={{textAlign:'center', paddingTop: '22px'}}>
          {this.buttonFunction('send')}
        </div>
      </div>
    )
  }

  send3(){
    return (
      <div>
        <img 
          src="dist/images/extension/thumb/white.svg" 
          alt="logo" className='logo sent' style={{ 
            height: '150px'}} 
          />
        <div className="heading1 thanks" >
          Thank you for your support!
        </div>
        <div className="bodyCopy thanks" style={{top:'78%', width:'100%'}}>
          {this.state.sendAddress}
          <div>has received your like</div>
        </div>
      </div>
    )
  }

  claim(){
    return (
      <div>
          <div className='bodycopy'>URL</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='claimUrl' type='text' className='mainText bodyCopy' style={{width: '224px', height:'28px'}} 
              placeholder="your.url/to/claim" onChange={() => this.setState({claimUrl:document.getElementById('claimUrl').value})}
            />
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'claim2')}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '224px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  Lookup URL status
                </div>
              }
              />
          </div>

        <div style={{textAlign:'center', paddingTop: '192.5px'}}>
          {this.buttonFunction('claim')}
        </div>
      </div>
    )
  }

  claim2(){
    return (
      <div>
          <div className='bodycopy' >
            URL
          </div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' style={{width: '228px', height:'30px'}} 
              placeholder="your.url/to/claim" onChange={() => this.setState({claimUrl:document.getElementById('claimUrl').value})}
            >
              <div style={{padding:6}}>
                {this.state.claimAddress}
              </div>
            </div>
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.state.togglePage(this.props.page, 'claim')}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '224px', outlineColor: '#4493BD'}}
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
              style={{width: '144px', height:'28px', outlineColor: '#4493BD', cursor:'pointer'}} 
              onChange={() => this.setState({claimUrl:document.getElementById('claimUrl').value})}
            >
              <div style={{padding:6}}>
                1. Copy this
              </div>
            </div>
          </div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' 
              style={{width: '144px', height:'28px', outlineColor: '#A2C9DE'}} 
            >
              <div style={{padding:6}}>
                2. Insert it
              </div>
            </div>
          </div>
          <div style={{float: 'left', paddingTop:'5px'}}>
            <div id='claimUrl' type='text' className='mainText bodyCopy' 
              style={{width: '144px', height:'28px', outlineColor: '#A2C9DE'}} 
            >
              <div style={{padding:6}}>
                3. Test it
              </div>
            </div>
          </div>

          <div style={{display: 'inline-block', paddingTop:'15px'}}
            onClick={() => this.state.togglePage(this.props.page, 'claim3')}>
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
          {this.buttonFunction('claim')}
        </div>
      </div>
    )
  }

  claim3(){
    return (
      <div>
        <img 
          src="dist/images/extension/thumb/white.svg" 
          alt="logo" className='logo sent' style={{ 
            height: '150px'}} 
          />
        <div className="heading1 thanks" style={{width:'100%'}}>
          Congrats! You have claimed the page:
        </div>
        <div className="bodyCopy thanks" style={{top:'78%', width:'100%'}}>
          {this.state.claimAddress}
        </div>
      </div>
    )
  }

  render() {
    switch(this.state.page){
      case 'account':
        return this.account()
      case 'like':
        return this.like()
      case 'like2':
        return this.like2()
      case 'like3':
        return this.like3()
      case 'buy':
        return this.buy()
      case 'send':
        return this.send()
      case 'send2':
        return this.send2()
      case 'send3':
        return this.send3()
      case 'claim':
        return this.claim()
      case 'claim2':
        return this.claim2()
      case 'claim3':
        return this.claim3()
      default:
        return 'work in progress'
    }
  }
}

export default MainFunctinos;