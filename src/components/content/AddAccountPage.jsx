import React from "react";
import YourAccount from "./Account";
import Button from './../Button';

const AddAccountPage = (context, copyElement, setAccount) => {

  return (
    <div className='mainContent bodyLabel'>
      <div className='mainInside' >
        <YourAccount toggleAccountMenu={context.toggleAccountMenu} account={ context.addAccount } page={context.page} />
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
              setAccount(document.getElementById('importSeed').value)
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
            onClick={copyElement('importSeed')}
          >
            <img style={{float:'left', position:'relative', top:'-10px', paddingRight:'10px', cursor:'pointer'}} src='dist/images/extension/Outline/Files/Copy.svg'></img>
            COPY TO CLIPBOARD
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAccountPage;