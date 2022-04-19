import React from 'react';
import Button from '../Button'

class MoreContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleMore: props.toggleMore,
      moreType: (this.props.page == 'accountSelect') ? 'moreAccount' : 'more'
    }
  }
  
  actionButtons = () => {
    switch(this.props.page) {
      case "accountSelect":
        return <div></div>
      default:
        return (
          <div>
            <Button className="bodyLabel moreRowTop"
              content={
                <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'like'); this.state.toggleMore()}}>
                  <img 
                    src="dist/images/LikeOnly.svg" 
                    alt="search" style={{marginRight: '15px', height: '25px'}} 
                  />
                  <div className='moreText'>
                    Like URL
                  </div>
                </div>
              }
              backgroundColor='#F9F9F9'
              backgroundColorhover='#E7E7E7'
            />

            <Button className="bodyLabel moreRowTop"
              content={
                <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'buy'); this.state.toggleMore()}}>
                  <img 
                    src="dist/images/BuyGrey.svg" 
                    alt="search" style={{marginRight: '15px', height: '25px'}} 
                  />
                  <div className='moreText'>
                  Buy Wika
                  </div>
                </div>
              }
              backgroundColor='#F9F9F9'
              backgroundColorhover='#E7E7E7'
            />

            <Button className="bodyLabel moreRowTop"
              content={
                <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'send'); this.state.toggleMore()}}>
                  <img 
                    src="dist/images/SendPlane.svg" 
                    alt="search" style={{marginRight: '15px', height: '25px'}} 
                  />
                  <div className='moreText'>
                  Send Wika
                  </div>
                </div>
              }
              backgroundColor='#F9F9F9'
              backgroundColorhover='#E7E7E7'
            />


            <Button className="bodyLabel moreRowBottom"
              content={
                <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'claim'); this.state.toggleMore()}}>
                  <img 
                    src="dist/images/ClaimOnly.svg" 
                    alt="search" style={{marginRight: '15px', height: '25px'}} 
                  />
                  <div className='moreText'>
                    Claim page ownership
                  </div>
                </div>
              }
              backgroundColor='#F9F9F9'
              backgroundColorhover='#E7E7E7'
            />

        
        <Button className="bodyLabel moreRow"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'accountSelect'); this.state.toggleMore()}}>
              <img 
                src="dist/images/extension/popup/Arrows/Connection.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
                Select an account
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


  render() {
    return(
      <div className={this.state.moreType}>
        <Button 
          className="bodyLabel moreRow"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'generate'); this.props.newAccount(); this.state.toggleMore()}}>
              <img 
                src="dist/images/extension/popup/user_interface/Plus Square.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
                Create new account
              </div>
            </div>
          } 
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />
        <Button 
          className="bodyLabel moreRow"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'addAccount'); this.state.toggleMore()}}>
              <img 
                src="dist/images/Download.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
                Import existing account
              </div>
            </div>
          } 
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />

        {this.actionButtons()}

        <Button className="bodyLabel moreRowTop"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip'); this.state.toggleMore()}}>
              <img 
                src="dist/images/extension/popup/Content/dialpad.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
              Attach external QR-signer account
              </div>
            </div>
          }
          backgroundColor='#F9F9F9'
          backgroundColorhover='#E7E7E7'
        />

        <Button className="bodyLabel moreRowBottom"
          content={
            <div className="moreButtonBottom" onClick={() => {this.state.togglePage(this.props.page, 'wip'); this.state.toggleMore()}}>
              <img 
                src="dist/images/extension/popup/Cloud and Web/server connection.svg" 
                alt="search" style={{marginRight: '15px', height: '25px'}} 
              />
              <div className='moreText'>
              Connect ledger device
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

export default MoreContent;