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
        />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
        onClick={() => togglePage(page, 'like')}
      />
      <Button content={
          <img 
            style={{padding:'12px'}} src={"dist/images/Buy" + lightButton['buy'] + ".svg"}
          />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
        onClick={() => togglePage(page, 'buy')}
      />
      <Button content={
          <img 
            style={{padding:'12px'}} src={"dist/images/Send" + lightButton['send'] + ".svg"}
          />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
        onClick={() => togglePage(page, 'send')}
      />
      <Button content={
          <img 
            style={{padding:'12px'}} src={"dist/images/Claim" + lightButton['claim'] + ".svg"}
          />
        } 
        className='asdf'
        style={{display: 'inline-block'}}
        backgroundColor='white'
        backgroundColorhover='#E7E7E7'
        onClick={() => togglePage(page, 'claim')}
      />
    </div>
  )
}

export default buttonFunction;