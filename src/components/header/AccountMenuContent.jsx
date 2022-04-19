import React from 'react';
import Button from '../Button'
import AppContext from "../../utils/context";

class AccountMenuContent extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  disconnectAccount = () => {
    this.context.selectAccount('')
    this.context.togglePage(this.props.page, 'accountSelect')
  }
  
  render() {
    return(
      <div className="accountMenu">

        <Button className="bodyCopy moreRowTop"
          content={
            <div className="moreButtonBottom" onClick={() => {this.context.togglePage(this.props.page, 'generate2'); this.context.toggleAddAccount(this.context.accounts[this.context.accountSelected]); this.context.toggleAccountMenu()}}>
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
            <div className="moreButtonBottom" onClick={() => {this.context.togglePage(this.props.page, 'wip'); this.context.toggleAccountMenu()}}>
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
            <div className="moreButtonBottom" onClick={() => {this.context.togglePage(this.props.page, 'wip'); this.context.toggleAccountMenu()}}>
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
              this.context.togglePage(this.props.page, 'accountSelect')
              this.context.toggleAccountMenu()
              var accounts = this.context.accounts
              delete accounts[this.context.accountSelected] 
              console.log(this.context.accountSelected)
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