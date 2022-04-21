import React from 'react';

const WelcomePage = () => {
  return(
    <div className='mainContent'>
      <div className="mainInside bodyCopy">
        <img src="dist/images/gettingStarted.png" style={{
          position: 'absolute',
          left: '6%',
          top: '7%',
          bottom: '29%',
          height: '260px'
        }}></img>
      </div>
    </div>
  )
}

export default WelcomePage;