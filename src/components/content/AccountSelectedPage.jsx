import React from "react";
import YourAccount from "./Account";
import MainAccountFunctions from '../MainAccountFunctions';

const AccountSelectedPage = (context) => {
  return (        
    <div className='mainContent bodyLabel'>
      <div className="mainInside">
        <YourAccount 
          toggleAccountMenu={context.toggleAccountMenu}
          page={context.page} 
          account={context.accounts[context.accountSelected]} 
          style={{height:'470px'}} 
          content={<MainAccountFunctions   page={context.page} accounts={context.accounts} accountSelected={context.accountSelected} togglePage={context.togglePage}/>}
        />
      </div>
    </div>
  )
}

export default AccountSelectedPage;