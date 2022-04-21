import React from "react";

const claim2 = (claimAddress) => {
  return (
    <div>
      <img 
        src="dist/images/extension/thumb/white.svg" 
        alt="logo" className='logo sent' style={{ 
          height: '150px'}} 
        />
      <div className="heading1 thanks" style={{width:'100%'}}>
        Congrats! You have claimed the page:
      </div>
      <div className="bodyCopy thanks" style={{top:'78%', width:'100%'}}>
        {claimAddress}
      </div>
    </div>
  )
}

export default claim2;

