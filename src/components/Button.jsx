import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      content: props.content,
      style: props.style,
      backgroundColorhover: props.backgroundColorhover,
      backgroundColor: props.backgroundColor,
      className: props.className,
      onClick: props.onClick
    }
  }

  toggleHover() {
    this.setState({
      hover: true
    });
  }

  toggleExitHover() {
    this.setState({
      hover: false
    });
  }
  
  render() {
    var linkStyle;
    let backgroundColorhover = (this.state.backgroundColorhover) ? this.state.backgroundColorhover:'#2A749B'
    let backgroundColor = (this.state.backgroundColor) ? this.state.backgroundColor:'#4493BD'
    let className = (this.state.className) ? this.state.className:'mainbutton'
    let onClick = (this.state.onClick) ? this.state.onClick : () => console.log('do nothing')
    if (this.state.hover) {
      linkStyle = {backgroundColor: backgroundColorhover, cursor: 'pointer'}
    } else {
      linkStyle = {backgroundColor: backgroundColor, cursor: 'pointer'}
    }
    let style=this.state.style
    return(
      <div className={className} style={{...linkStyle, ...style}} 
        onMouseEnter={() => this.toggleHover()} 
        onMouseLeave={() => this.toggleExitHover()}
        onClick={() => onClick()}>
        {this.state.content}
      </div>
    )
  }
}

export default Button;