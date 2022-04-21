import React from "react";
import YourAccount from "./Account";

const GenerateAccountPage = (context, copyElement) => {

  return (
    <div className='mainContent bodyLabel'>
      <div className='mainInside' >
        <YourAccount  toggleAccountMenu={context.toggleAccountMenu} account={context.addAccount}  page={context.page} />
        <div style={{paddingTop:25}}>
          <div style={{padding:5}}>
            GENERATED 12-WORD MNEMONIC SEED 
          </div>
          <textarea id='seed' className='seedBox' defaultValue={context.addAccount.phrase} >
          </textarea>
          <div  style={{paddingTop:'40px', cursor:'pointer'}}
            onClick={copyElement('seed')}  
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
}

export default GenerateAccountPage