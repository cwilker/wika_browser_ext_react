import React from "react";
import Button from '../Button';

const buttonFunction = (button, page, togglePage) => {

  let lightButton = {
    like: '',
    buy: '',
    send: '',
    claim: ''
  }
  lightButton[button] = 'Light'

  return (
    <div>
      <Button content={
        <img 
          style={{padding:'12px' }} src={"dist/images/Like" + lightButton['like'] + ".svg"}
          onClick={() => togglePage(page, 'like')}
        />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
      />
      <Button content={
          <img 
            style={{padding:'12px'}} src={"dist/images/Buy" + lightButton['buy'] + ".svg"}
            onClick={() => togglePage(page, 'buy')}
          />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
      />
      <Button content={
          <img 
            style={{padding:'12px'}} src={"dist/images/Send" + lightButton['send'] + ".svg"}
            onClick={() => togglePage(page, 'send')}
          />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
      />
      <Button content={
          <img 
            style={{padding:'12px'}} src={"dist/images/Claim" + lightButton['claim'] + ".svg"}
            onClick={() => togglePage(page, 'claim')}
          />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
      />
    </div>
  )
}

export default buttonFunction;