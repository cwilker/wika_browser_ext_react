import React from "react";
import Button from '../Button';
import buttonFunction from './ActionButtons'


class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage:  props.togglePage,
      numLikes: props.numLikes,
      likeURL: props.likeURL,
      likeURLSelected: false
    }
  }

  dependentLike (likeURLSelected) {
    if (likeURLSelected) {
      return (
        <div style={{display: 'inline-block',  paddingTop:'5px'}}
          onClick={() => this.state.togglePage(this.props.page, 'like2')}>
          <Button className='mainText bodyCopy' 
            style={{width: '84px', outlineColor: '#4BA520'}}
            content={
              <div style={{float:'left', padding:'8px', color:'white'}}>
                Like
              </div>
            }
            backgroundColor='#4BA520'
            backgroundColorhover='#26620A'
            />
        </div>
      )
    } else {
      return (
        <div style={{display: 'inline-block' }}>
        <Button className='mainText bodyCopy' 
          style={{width: '84px', outlineColor: '#BEE0AE', backgroundColor:'#BEE0AE'}}
          content={
            <div style={{float:'left', padding:'8px', color:'white'}}>
              Like
            </div>
          }
          />
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <div className='bodyLabel'>BALANCE</div>
        <div style={{paddingTop:'5px'}}>
          <div style={{display: 'inline-block', paddingRight:'20px' }}>
            <div className='mainText bodyCopy' style={{width: '217px'}}>
              <div style={{float:'right', padding:'8px'}}>00.00000 W</div>
            </div>
          </div>
          <div style={{display: 'inline-block' }}>
            <div className='mainText bodyCopy' style={{ width: '217px'}}>
              <div style={{float:'right', padding:'8px'}}>$ 00.00</div>
            </div>
          </div>
        </div>

        <div style={{paddingTop:'37px'}}>
          <div className='bodyLabel'>URL</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='likeURL' type='text' className='mainText bodyCopy' style={{width: '214px', height:'28px'}} 
              placeholder="your.url/to/like" onChange={() => this.setState({likeURL:document.getElementById('likeURL').value})}
            />
          </div>
          <div style={{display: 'inline-block', paddingTop:'5px'}}
            onClick={() => this.setState({likeURLSelected:true})}>
            <Button className='mainText bodyCopy' 
              style={{ float: 'left', width: '214px', outlineColor: '#4493BD'}}
              content={
                <div style={{float:'left', padding:'8px', color:'white'}}>
                  {(this.state.likeURLSelected)? "clear": "Lookup URL status"}
                </div>
              }
              />
          </div>
        </div>

        <div style={{paddingTop:'35px'}}>
          <div className='bodyLabel'>NUMBER OF LIKES TO SEND</div>
          <div style={{float: 'left', paddingRight:'20px', paddingTop:'5px'}}>
            <input id='numLikes' type='number' className='mainText bodyCopy' style={{width: '144.6px', height:'28px'}} 
              value={this.state.numLikes} onChange={() => this.setState({numLikes:document.getElementById('numLikes').value})}
            />
          </div>

          <div style={{display: 'inline-block',  paddingTop:'5px', paddingRight:'20px'}}>
            <div className='mainText bodyCopy' style={{ width: '144.6px',}}>
              <div style={{float:'right', padding:'8px'}}>$ {(Math.round((this.state.numLikes * 0.05)*100)/100).toFixed(2)}</div>
            </div>
          </div>
          {this.dependentLike(this.state.likeURLSelected)}
        </div>

        <div style={{textAlign:'center', paddingTop: '22px'}}>
          {buttonFunction('like', this.state.page, this.state.togglePage)}
        </div>
      </div>
    )
  }

}

export default Like;