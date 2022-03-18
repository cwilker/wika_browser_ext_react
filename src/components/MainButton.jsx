import React from 'react';
import Button from './Button';

class MainButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleAddAccount: props.toggleAddAccount,
      addSelectAccount: props.addSelectAccount
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page
    }
  }

  disconnectAccount = () => {
    this.props.selectAccount('')
    this.state.togglePage(this.props.page, 'accountSelect')
  }

  render() {
    switch(this.props.page) {
      case 'welcome':
        return (
          <div style={{
            position: 'relative',
            background: '#F0F0F0',
            height:'75px',
            width: '550px',
          }}>
            <div onClick={() => this.state.togglePage(this.props.page, 'setup')}>
              <Button content={
                <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                  Get Started
                </div>
              } />
            </div>
          </div>
        )
      case 'like':
      case 'like2':
      case 'like3':  
      case 'buy':
      case 'send':
      case 'send2':
      case 'send3':
      case 'claim':
      case 'claim2':
      case 'claim3':
        return (
          <div style={{
            position: 'relative',
            background: '#F0F0F0',
            height:'75px',
            width: '550px',
          }}>
            <div onClick={() => this.state.togglePage(this.props.page, 'account')}>
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
      case 'account':
        return (
          <div style={{
            position: 'relative',
            background: '#F0F0F0',
            height:'75px',
            width: '550px',
          }}>
            {/* <div onClick={() => this.state.togglePage(this.props.page, 'accountSelect')}> */}
            <div onClick={() => this.disconnectAccount()}>
              {/* only including this img tag because it fixes a weird react bug */}
              <img></img>
              <Button content={
                <div className='bodyCopy' 
                  style={{padding: '14px', color: "white"}} 
                >
                  Disconnect Account
                </div>
              } 
              backgroundColor='#303D48' backgroundColorhover='black'
              />
            </div>
          </div>
        )
      case 'setup':
        return (
          <div style={{display:'inline'}}>
            <div style={{
              position: 'relative',
              float:'left',
              background: '#F0F0F0',
              height:'75px',
              width: '275px',
            }}>
              <div onClick={() => {this.state.togglePage(this.props.page, 'generate'); this.props.newAccount()}}>
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
              <div onClick={() => this.state.togglePage(this.props.page, 'addAccount')}>
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
      case 'addAccount':
        return (
          <div style={{
            position: 'relative',
            background: '#F0F0F0',
            height:'75px',
            width: '550px',
          }}>
            <div onClick={() => {this.state.togglePage(this.props.page, 'generate2')}}>
              <Button content={
                <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                  Next Step
                </div>
              } />
            </div>
          </div>
        )
      case 'generate':
        return (
          <div style={{
            position: 'relative',
            background: '#F0F0F0',
            height:'75px',
            width: '550px',
          }}>
            <div onClick={() => {this.state.togglePage(this.props.page, 'generate2')}}>
              <Button content={
                <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                  Next Step
                </div>
              } />
            </div>
          </div>
        )
      case 'generate2':
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
              <div onClick={() => {this.state.togglePage(this.props.page, this.props.previousPage)}}>
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
              <div onClick={() => {this.state.togglePage(this.props.page, 'account'); this.props.addSelectAccount(this.props.addAccount); this.state.toggleAddAccount({accountName:'<Account Name>', address:'N/A'})}}>
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
      case 'accountSelect':
        return (
          <div style={{
            position: 'relative',
            background: '#F9F9F9',
            height:'75px',
            width: '550px',
          }}></div>   
        )
      default:
        return (
          <div style={{
            position: 'relative',
            background: '#F0F0F0',
            height:'75px',
            width: '550px',
          }}>
            <div onClick={() => this.state.togglePage(this.props.page, 'welcome')}>
              <Button content={
                <div className='bodyCopy' style={{padding: '14px', color: "white"}}>
                  <div>Work in progress</div>
                </div>
              } />
            </div>
          </div>
        )
    }
  }
}

export default MainButton;