import React from 'react';
import Button from '../Button'

class AccountMenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleAccountMenu: props.toggleAccountMenu,
      accounts: props.accounts,
      selectAccount: props.selectAccount,
      accountSelected: props.accountSelected
    }
  }

  disconnectAccount = () => {
    this.props.selectAccount('')
    this.state.togglePage(this.props.page, 'accountSelect')
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
            <div className="moreButtonBottom" onClick={() => {
              this.state.togglePage(this.props.page, 'accountSelect')
              this.state.toggleAccountMenu()
              var accounts = this.state.accounts
              delete accounts[this.state.accountSelected] 
              console.log(this.state.accountSelected)
              console.log(accounts)
              this.props.BACKGROUND.storage.set({'accounts': accounts})
              // chrome.storage.local.set({'accounts': accounts}, function() {})
              this.disconnectAccount()
            }}>
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