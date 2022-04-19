import React from 'react';
import Identicon from 'react-identicons';
import Button from './Button';
import MainFunctions from './MainFunctions';
import {copyToClipboard} from "./../utils/misc";
import AppContext from "../utils/context";

class YourAccount extends React.Component {
  static contextType = AppContext;
  
  constructor(props) {
    super(props);
    this.state = {
      account: props.account,
      style: props.style,
      content: props.content,
      selectAccount: props.selectAccount,
      page: props.page
    }
  }

  copyElement = (element) => () => {
    copyToClipboard(element) ;
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page,
      account: props.account
    }
  }

  contentInjector() {
    if (this.props.content){
      return (
        <div style={{paddingTop:'100px', paddingRight:'18px', paddingLeft:'18px'}}>
          {this.props.content}
        </div>
      )
    } 
  }

  renderSelectButtonOrOptions() {
    switch(this.context.page) {
      case 'accountSelect':
        return (
          <div>
            <div style={{position: 'absolute', top:'20px', left: '450px'}}>
              <img style={{height:'30px'}} src="dist/images/Select.svg"></img>
            </div>
          </div>
        )
      default:
        return(
          <div>
            <div style={{position: 'absolute', top:'10px', left: '440px'}}>
            <img src="dist/images/extension/Outline/Status/Eye.svg"
            ></img>
            <br/>
            <img 
              title="copy address"
              src="dist/images/extension/Outline/Files/Copy.svg"
              style={{cursor: 'pointer'}}
              onClick={this.copyElement("account_address_element")}
            ></img>
            </div>  
            <img style={{position: 'absolute', top:'10px', left: '470px'}}
              src="dist/images/extension/Vector 2.svg"></img>
            <img 
              title="Account Settings"
              onClick={() => this.context.toggleAccountMenu()}
              style={{position: 'absolute', top:'18px', left: '468px', cursor:'pointer'}} 
              src="dist/images/extension/User Interface/Menu.svg"></img>
            <div style={{paddingTop:'100px', paddingRight:'18px', paddingLeft:'18px'}}>
              {this.props.content}
            </div>
          </div>
        )
    }
  }

  render() {
    let style=this.props.style
    return (
      <div className='accountBox' style={{...style}}>
        <div className='identicon' style={{float:'left'}}>
          {<Identicon string={this.state.account.address} size={40}/>}
        </div>
        <div className='accountName bodyCopy'>
          {this.state.account.accountName}
        </div>

        <input id="account_address_element"
          type="text"
          className='accountAddress bodyLabel'
          value={this.state.account.address}
          readOnly={true}
          style={{width:300, border:'none'}}
        />

        {this.renderSelectButtonOrOptions()}
      </div>
    )
  }
}

class MainContent extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      // selectAccount: props.selectAccount
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      // accounts: props.accounts,
      // accountSelected: props.accountSelected,
      // randomAccount: props.randomAccount
    }
  }

  copyElement = (element) => () => {
    copyToClipboard(element) ;
  }

  setAccount = (phrase) => {
    if (phrase.split(' ').length % 12 === 0){
        try {
          var addAccount = this.context.importAccountFromPhrase(phrase);
          this.context.toggleAddAccount(addAccount)
        } catch (error) {
          alert(error);
        }
      }
    else {
      alert('phrase must be 12 or 24 words long')
    }
  }

  render() {
    switch(this.context.page) {
      case 'welcome':
        return(
          <div className='mainContent'>
            <div className="mainInside bodyCopy">
              <img src="dist/images/gettingStarted.png" style={{
                position: 'absolute',
                left: '6%',
                top: '7%',
                bottom: '29%',
                height: '260px'
              }}></img>
            </div>
          </div>
        )
      case 'setup':
        return (
          <div className='mainContent'>
            <div className='mainInside bodyCopy'>
              <div>Wika Network is built in the Polkadot ecosystem. You can reuse an existing Polkadot address if you already have one, or create a new one from scratch.</div>
              <img className="mainThumb" src='dist/images/extension/thumb/white.svg' ></img>
            </div>
          </div>
        )
      

      case 'addAccount':
        return (
          <div className='mainContent bodyLabel'>
            <div className='mainInside' >
              <YourAccount toggleAccountMenu={this.context.toggleAccountMenu} account={ this.context.addAccount } page={this.context.page} />
              <div style={{paddingTop:25}}>
                <div style={{padding:5}}>
                  EXISTING 12 OR 24 WORD MNEMONIC SEED
                </div>
                <div>
                  <textarea id='importSeed' defaultValue=''
                    type='text' className='mainText accountBox' style={{height: '70px', color:'#A77121'}}
                  />
                </div>
                <div 
                  style={{float: 'right', padding:'10px 10px 10px 0px'}}
                  onClick={() => {
                    this.setAccount(document.getElementById('importSeed').value)
                    }
                  }
                >
                  <Button className='mainButton bodyCopy' 
                    style={{width:'100px'}}
                    content={
                      <div style={{fontWeight: 'light', textAlign:'center', padding:'8px', color:'white'}}>
                        Import
                      </div>
                    }
                  />
                </div>
                <div  style={{paddingTop:'50px', cursor: 'pointer'}}
                  onClick={this.copyElement('importSeed')}
                >
                  <img style={{float:'left', position:'relative', top:'-10px', paddingRight:'10px', cursor:'pointer'}} src='dist/images/extension/Outline/Files/Copy.svg'></img>
                  COPY TO CLIPBOARD
                </div>
              </div>
            </div>
          </div>
        )

      case 'generate':
        return (
          <div className='mainContent bodyLabel'>
            <div className='mainInside' >
              <YourAccount  toggleAccountMenu={this.context.toggleAccountMenu} account={this.context.addAccount}  page={this.context.page} />
              <div style={{paddingTop:25}}>
                <div style={{padding:5}}>
                  GENERATED 12-WORD MNEMONIC SEED 
                </div>
                <textarea id='seed' className='accountBox' defaultValue={this.context.addAccount.phrase} style={{color:'#A77121', width:'505px'}}>
                  {/* <div style={{padding:10, color:'#A77121'}}> */}
                    {/* {this.state.addAccount.phrase} */}
                  {/* </div> */}
                </textarea>
                <div  style={{paddingTop:'40px', cursor:'pointer'}}
                  onClick={this.copyElement('seed')}  
                >
                  <img style={{float:'left', position:'relative', top:'-10px', paddingRight:'10px'}} src='dist/images/extension/Outline/Files/Copy.svg'></img>
                  COPY TO CLIPBOARD
                </div>
                <div  style={{paddingTop:'40px'}}>
                  <img style={{float:'left', position:'relative', top:'-2px', paddingRight:'10px'}} src='dist/images/extension/User Interface/exclamation triangle.svg'></img>
                  Please write down your wallet's mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.
                </div>
                <div  style={{paddingTop:'120px'}}>
                  <div style={{float:'left', position:'relative', top:'-5px', paddingRight:'10px'}}>
                    <input type='checkbox' />
                  </div>
                  I have saved my mnemonic seed safely
                </div>
              </div>
            </div>
          </div>
        )

      case 'generate2': 
        return (        
          <div className='mainContent bodyLabel'>
            <div className='mainInside' >
              <YourAccount  toggleAccountMenu={this.context.toggleAccountMenu} account={this.context.addAccount}  page={this.context.page} />
              <form>
                <div style={{paddingTop:25}}>
                  <div style={{padding:5}}>
                    ACCOUNT NAME
                  </div>
                  <input 
                    id='accountName' type='text' className='mainText' placeholder='<Account Name>' autoComplete='username'
                    onChange={() => {this.context.addAccount.accountName = document.getElementById('accountName').value}}
                  />
                </div>
                <div style={{paddingTop:25}}>
                  <div style={{padding:5}}>
                    A NEW PASSWORD FOR YOUR ACCOUNT
                  </div>
                  <input 
                    id='password' type='password' className='mainText' placeholder='<your password>' autoComplete='new-password'
                  />
                </div>
                <div style={{paddingTop:25}}>
                  <div style={{padding:5}}>
                    CONFIRM PASSWORD
                  </div>
                  <input 
                    id='confirmPassword' type='password' className='mainText' placeholder='<your password>' autoComplete='new-password'
                  />
                </div>
              </form>
            </div>
          </div>
        )
      case 'accountSelect':
        let accountArray = Object.values(this.context.accounts)
        // console.log(accountArray)
        let accountKeys = Object.keys(this.context.accounts)
        const accountInfo = accountArray.map((account, i) =>{
          return (
            <div key={i} style={{paddingBottom: '20px'}} onClick={() => {this.context.togglePage(this.context.page, 'account'); this.context.selectAccount(accountKeys[i])}}>
              <Button 
                content={
                  <YourAccount 
                    toggleAccountMenu={this.context.toggleAccountMenu} 
                    account={accountArray[i]}
                    page={this.context.page} 
                  />
                } 
                className='a'
                backgroundColor='white'
                backgroundColorhover='#E7E7E7'
              />
            </div>
          )
        })
        return (
          <div className='mainContent bodyLabel'>
            <div className='mainInside' >
              {accountInfo}
            </div>
          </div>
        )
      case 'account':
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
          <div className='mainContent bodyLabel'>
            <div className='mainInside' >
              <YourAccount 
                toggleAccountMenu={this.context.toggleAccountMenu}
                page={this.context.page} 
                account={this.context.accounts[this.context.accountSelected]} 
                style={{height:'430px'}} 
                content={<MainFunctions   page={this.context.page} accounts={this.context.accounts} accountSelected={this.context.accountSelected} togglePage={this.context.togglePage}/>}
              />
            </div>
          </div>
        )
      default:
        return (
          <div className='mainContent heading1'>
            work in progress
          </div>
        )
    }
  }
}



export default MainContent;