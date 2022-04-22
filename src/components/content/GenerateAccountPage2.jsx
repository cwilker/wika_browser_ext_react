import React from "react";
import AppContext from "../../utils/context";
import YourAccount from "./Account";

class GenerateAccountPage2 extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
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
  }
}

export default GenerateAccountPage2;

