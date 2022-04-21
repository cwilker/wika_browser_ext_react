import React from "react";
import YourAccount from "./Account";

const GenerateAccountPage2 = (context) => {
  return (        
    <div className='mainContent bodyLabel'>
      <div className='mainInside' >
        <YourAccount  toggleAccountMenu={context.toggleAccountMenu} account={context.addAccount}  page={context.page} />
        <form>
          <div style={{paddingTop:25}}>
            <div style={{padding:5}}>
              ACCOUNT NAME
            </div>
            <input 
              id='accountName' type='text' className='mainText' placeholder='<Account Name>' autoComplete='username'
              onChange={() => {context.addAccount.accountName = document.getElementById('accountName').value}}
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

export default GenerateAccountPage2;