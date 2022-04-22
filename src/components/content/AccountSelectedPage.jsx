import React from "react";
import AppContext from "../../utils/context";
import YourAccount from "./Account";
import MainAccountFunctions from '../MainAccountFunctions';

class AccountSelectedPage extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (        
      <div className='mainContent bodyLabel'>
        <div className="mainInside">
          <YourAccount 
            toggleAccountMenu={this.context.toggleAccountMenu}
            page={this.context.page} 
            account={this.context.accounts[this.context.accountSelected]} 
            style={{height:'470px'}} 
            content={<MainAccountFunctions   page={this.context.page} accounts={this.context.accounts} accountSelected={this.context.accountSelected} togglePage={this.context.togglePage}/>}
          />
        </div>
      </div>
    )
  }
}

export default AccountSelectedPage;
