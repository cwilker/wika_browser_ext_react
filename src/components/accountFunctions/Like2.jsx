import React from "react";

const like2 = (likeURL) => {
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
      <div className="bodyCopy thanks" style={{top:'78%', width:'100%'}}>{likeURL} has received your like</div>
    </div>
  )
}

export default like2;