import React from 'react';
import Identicon from 'react-identicons';
import AppContext from "../../utils/context";
import {copyToClipboard} from "../../utils/misc";

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
            <img src="dist/images/extension/Outline/Status/Eye.svg"></img>
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
        <div style={{paddingTop:'80px'}}>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default YourAccount;