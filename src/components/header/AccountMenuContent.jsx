import React from 'react';
import Button from '../Button'

class AccountMenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleAccountMenu: props.toggleAccountMenu
    }
  }
  
  render() {
    return(
      <div className="accountMenu">

        <Button className="bodyCopy moreRowTop"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'generate2'); this.props.toggleAddAccount(this.props.accounts[this.props.accountSelected]); this.state.toggleAccountMenu()}}>
              <div className='accountText'>
                Rename
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />

        <Button className="bodyCopy moreRowBottom"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip'); this.state.toggleAccountMenu()}}>
              <div className='accountText'>
                Derive New Account
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />

        <Button className="bodyCopy moreRowTop"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip'); this.state.toggleAccountMenu()}}>
              <div className='accountText'>
                Export Account
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />


        <Button className="bodyCopy moreRowBottom"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip'); this.state.toggleAccountMenu()}}>
              <div className='accountText'>
                Forget Account
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />
      </div>
    )
  }
}

export default AccountMenuContent;