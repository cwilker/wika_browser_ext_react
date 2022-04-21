import React from "react";
import YourAccount from "./Account";
import Button from './../Button';

const AccountSelectPage = (context) => {
  let accountArray = Object.values(context.accounts)
  let accountKeys = Object.keys(context.accounts)
  const accountInfo = accountArray.map((account, i) =>{
    return (
      <div key={i} style={{paddingBottom: '20px'}} onClick={() => {context.togglePage(context.page, 'account'); context.selectAccount(accountKeys[i])}}>
        <Button 
          content={
            <YourAccount 
              toggleAccountMenu={context.toggleAccountMenu} 
              account={accountArray[i]}
              page={context.page} 
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

export default AccountSelectPage;