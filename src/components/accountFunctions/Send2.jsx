import React from "react";

const send2 = (sendAddress) => {
  return (
    <div>
      <img 
        src="dist/images/extension/thumb/white.svg" 
        alt="logo" className='logo sent' style={{ 
          height: '150px'}} 
        />
      <div className="heading1 thanks" >
        Thank you for your support!
      </div>
      <div className="bodyCopy thanks" style={{top:'78%', width:'100%'}}>
        {sendAddress}
        <div>has received your like</div>
      </div>
    </div>
  )
}

export default send2;