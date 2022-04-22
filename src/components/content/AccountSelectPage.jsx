import React from "react";
import AppContext from "../../utils/context";
import YourAccount from "./Account";
import Button from './../Button';

class AccountSelectPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    let accountArray = Object.values(this.context.accounts)
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
  }
}

export default AccountSelectPage;
