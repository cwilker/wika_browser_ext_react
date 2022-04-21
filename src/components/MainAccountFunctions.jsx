import React from "react";
import AccountLandingPage from './accountFunctions/AccountLandingPage'
import Like from './accountFunctions/Like'
import like2 from './accountFunctions/Like2'
import Send from './accountFunctions/Send.jsx'
import send2 from './accountFunctions/Send2.jsx'
import Claim from './accountFunctions/Claim.jsx'
import claim2 from './accountFunctions/Claim2.jsx'

class MainAccountFunctinos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage:  props.togglePage,
      numLikes: 1,
      likeURL: 'https://www.wika.network/',
      sendAddress: '5GWEiv2fSRoeaXwhTCP1qvnJRT8BVnXnTL8CVsnP8M3G7z2i',
      claimAddress: 'https://www.wika.network/'
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page,
      accounts: props.accounts,
      accountSelected: props.accountSelected
    }
  }

  setStateWKey = (key) => {
    this.setState({key:document.getElementById(key).value})
  }

  render() {
    switch(this.state.page){
      case 'account':
        return (
          <AccountLandingPage
            page={this.state.page}
            togglePage={this.state.togglePage}
            accounts={this.state.accounts}
            accountSelected={this.state.accountSelected}
          />
        )
      case 'like':
        return (
          <Like
            page={this.state.page}
            togglePage={this.state.togglePage}
            numLikes={this.state.numLikes}
            likeURL={this.state.likeURL}
          />
        )
      case 'like2':
        return (like2(this.state.likeURL))
      case 'send':
        return (
          <Send 
            page={this.state.page}
            togglePage={this.state.togglePage}
            numLikes={this.state.numLikes}
            sendAddress={this.state.sendAddress}
          />
        )
          
      case 'send2':
        return send2(this.state.sendAddress)
      case 'send3':
        return this.send3()
      case 'claim':
        return (
          <Claim 
            page={this.state.page}
            togglePage={this.state.togglePage}
            claimUrl= {this.state.claimUrl}
          />
        )
      case 'claim2':
        return claim2(this.state.claimAddress)
      default:
        return 'work in progress'
    }
  }
}

export default MainAccountFunctinos;