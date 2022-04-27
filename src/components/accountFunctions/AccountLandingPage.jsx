import React from "react";
import buttonFunction from './ActionButtons'

class AccountLandingPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage: props.togglePage,
      accounts: props.accounts,
      accountSelected: props.accountSelected
    }
  }

  render() {
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '217px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '217px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>
  
        <div  style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS (SUBSTRATE FORMAT)</div>
          <div style={{paddingTop:'5px'}}>
            <div className='mainText' >
              <div style={{padding:'10px'}}>
                {this.state.accounts[this.state.accountSelected].address}
              </div>
            </div>
          </div>
        </div>
  
        <div  style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>PUBLIC ADDRESS (RAW HEX FORMAT)</div>
          <div style={{paddingTop:'5px'}}>
            <div className='mainText' >
            <div style={{padding:'10px'}}>
                {this.state.accounts[this.state.accountSelected].addressRaw}
              </div>
            </div>
          </div>
        </div>
  
        <div style={{textAlign:'center', paddingTop: '25px'}}>
          {buttonFunction('', this.state.page, this.state.togglePage)}
        </div>
      </div>
    )
  }
}

export default AccountLandingPage;