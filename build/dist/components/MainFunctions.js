import React from "../../snowpack/pkg/react.js";
import Button from "./Button.js";
class MainFunctinos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      togglePage: props.togglePage,
      numLikes: 1,
      likeURL: "https://www.wika.network/",
      sendAddress: "5GWEiv2fSRoeaXwhTCP1qvnJRT8BVnXnTL8CVsnP8M3G7z2i",
      claimAddress: "https://www.wika.network/"
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page
    };
  }
  buttonFunction = (button) => {
    let lightButton = {
      like: "",
      buy: "",
      send: "",
      claim: ""
    };
    lightButton[button] = "Light";
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
      content: /* @__PURE__ */ React.createElement("img", {
        style: {padding: "12px"},
        src: "dist/images/Like" + lightButton["like"] + ".svg",
        onClick: () => this.state.togglePage(this.props.page, "like")
      }),
      className: "asdf",
      style: {display: "inline-block"},
      backgroundColor: "white",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      content: /* @__PURE__ */ React.createElement("img", {
        style: {padding: "12px"},
        src: "dist/images/Buy" + lightButton["buy"] + ".svg",
        onClick: () => this.state.togglePage(this.props.page, "buy")
      }),
      className: "asdf",
      style: {display: "inline-block"},
      backgroundColor: "white",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      content: /* @__PURE__ */ React.createElement("img", {
        style: {padding: "12px"},
        src: "dist/images/Send" + lightButton["send"] + ".svg",
        onClick: () => this.state.togglePage(this.props.page, "send")
      }),
      className: "asdf",
      style: {display: "inline-block"},
      backgroundColor: "white",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      content: /* @__PURE__ */ React.createElement("img", {
        style: {padding: "12px"},
        src: "dist/images/Claim" + lightButton["claim"] + ".svg",
        onClick: () => this.state.togglePage(this.props.page, "claim")
      }),
      className: "asdf",
      style: {display: "inline-block"},
      backgroundColor: "white",
      backgroundColorhover: "#E7E7E7"
    }));
  };
  account() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "BALANCE"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "00.00000 W"))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ 00.00")))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "37px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "PUBLIC ADDRESS (SUBSTRATE FORMAT)"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText"
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: "10px"}
    }, this.props.accounts[this.props.accountSelected].address)))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "37px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "PUBLIC ADDRESS (RAW HEX FORMAT)"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText"
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: "10px"}
    }, this.props.accounts[this.props.accountSelected].addressRaw)))), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "25px"}
    }, this.buttonFunction("")));
  }
  like() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "BALANCE"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "00.00000 W"))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ 00.00")))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "37px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "URL"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "likeURL",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "224px", height: "28px"},
      placeholder: "your.url/to/like",
      onChange: () => this.setState({likeURL: document.getElementById("likeURL").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => this.state.togglePage(this.props.page, "like2")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "224px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Lookup URL status")
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "35px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "NUMBER OF LIKES TO SEND"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "numLikes",
      type: "number",
      className: "mainText bodyCopy",
      style: {width: "144.6px", height: "28px"},
      value: this.state.numLikes,
      onChange: () => this.setState({numLikes: document.getElementById("numLikes").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "144.6px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ ", (Math.round(this.state.numLikes * 0.05 * 100) / 100).toFixed(2)))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {width: "84px", outlineColor: "#BEE0AE", backgroundColor: "#BEE0AE"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Like")
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "22px"}
    }, this.buttonFunction("like")));
  }
  like2() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "BALANCE"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "00.00000 W"))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ 00.00")))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "37px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "URL"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "228px", background: "#E7E7E7"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingTop: "7.5px", paddingLeft: "2px"}
    }, this.state.likeURL))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => {
        this.state.togglePage(this.props.page, "like");
        this.setState({likeURL: "https://app.wika.network/#"});
      }
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "224px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Clear")
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "35px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "NUMBER OF LIKES TO SEND"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "numLikes",
      type: "number",
      className: "mainText bodyCopy",
      style: {width: "144.6px", height: "28px"},
      value: this.state.numLikes,
      onChange: () => this.setState({numLikes: document.getElementById("numLikes").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "144.6px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ ", (Math.round(this.state.numLikes * 0.05 * 100) / 100).toFixed(2)))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => this.state.togglePage(this.props.page, "like3")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {width: "84px", outlineColor: "#4BA520"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Like"),
      backgroundColor: "#4BA520",
      backgroundColorhover: "#26620A"
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "22px"}
    }, this.buttonFunction("like")));
  }
  like3() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
      src: "dist/images/extension/thumb/white.svg",
      alt: "logo",
      className: "logo sent",
      style: {
        height: "150px"
      }
    }), /* @__PURE__ */ React.createElement("div", {
      className: "heading1 thanks"
    }, "Thank you for your support!"), /* @__PURE__ */ React.createElement("div", {
      className: "bodyCopy thanks",
      style: {top: "78%", width: "100%"}
    }, this.state.likeURL, " has received your like"));
  }
  buy() {
    return /* @__PURE__ */ React.createElement("div", null, "Work in progress", /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "230px"}
    }, this.buttonFunction("buy")));
  }
  send() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "BALANCE"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "00.00000 W"))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ 00.00")))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "37px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "PUBLIC ADDRESS TO SEND TO"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "sendAddress",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "376px", height: "28px"},
      placeholder: "address",
      onChange: () => this.setState({sendAddress: document.getElementById("sendAddress").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => this.state.togglePage(this.props.page, "send2")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "74px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Lookup")
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "35px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "NUMBER OF LIKES TO SEND"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "numLikes",
      type: "number",
      className: "mainText bodyCopy",
      style: {width: "144.6px", height: "28px"},
      value: this.state.numLikes,
      onChange: () => this.setState({numLikes: document.getElementById("numLikes").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "144.6px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ ", (Math.round(this.state.numLikes * 0.05 * 100) / 100).toFixed(2)))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {width: "84px", outlineColor: "#BEE0AE", backgroundColor: "#BEE0AE"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Like")
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "22px"}
    }, this.buttonFunction("send")));
  }
  send2() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "BALANCE"), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "00.00000 W"))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "227px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ 00.00")))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "37px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "PUBLIC ADDRESS TO SEND TO"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "380px", background: "#E7E7E7"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingTop: "7.5px", paddingLeft: "2px"}
    }, this.state.sendAddress))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => {
        this.state.togglePage(this.props.page, "send");
        this.setState({likeURL: "https://app.wika.network/#"});
      }
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "74px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Clear")
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {paddingTop: "35px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bodyLabel"
    }, "NUMBER OF LIKES TO SEND"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "numLikes",
      type: "number",
      className: "mainText bodyCopy",
      style: {width: "144.6px", height: "28px"},
      value: this.state.numLikes,
      onChange: () => this.setState({numLikes: document.getElementById("numLikes").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px", paddingRight: "20px"}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mainText bodyCopy",
      style: {width: "144.6px"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {float: "right", padding: "8px"}
    }, "$ ", (Math.round(this.state.numLikes * 0.05 * 100) / 100).toFixed(2)))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => this.state.togglePage(this.props.page, "send3")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {width: "84px", outlineColor: "#4BA520"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Send"),
      backgroundColor: "#4BA520",
      backgroundColorhover: "#26620A"
    }))), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "22px"}
    }, this.buttonFunction("send")));
  }
  send3() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
      src: "dist/images/extension/thumb/white.svg",
      alt: "logo",
      className: "logo sent",
      style: {
        height: "150px"
      }
    }), /* @__PURE__ */ React.createElement("div", {
      className: "heading1 thanks"
    }, "Thank you for your support!"), /* @__PURE__ */ React.createElement("div", {
      className: "bodyCopy thanks",
      style: {top: "78%", width: "100%"}
    }, this.state.sendAddress, /* @__PURE__ */ React.createElement("div", null, "has received your like")));
  }
  claim() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodycopy"
    }, "URL"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("input", {
      id: "claimUrl",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "224px", height: "28px"},
      placeholder: "your.url/to/claim",
      onChange: () => this.setState({claimUrl: document.getElementById("claimUrl").value})
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => this.state.togglePage(this.props.page, "claim2")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "224px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Lookup URL status")
    })), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: "192.5px"}
    }, this.buttonFunction("claim")));
  }
  claim2() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "bodycopy"
    }, "URL"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      id: "claimUrl",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "228px", height: "30px"},
      placeholder: "your.url/to/claim",
      onChange: () => this.setState({claimUrl: document.getElementById("claimUrl").value})
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: 6}
    }, this.state.claimAddress))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "5px"},
      onClick: () => this.state.togglePage(this.props.page, "claim")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "224px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {float: "left", padding: "8px", color: "white"}
      }, "Clear")
    })), /* @__PURE__ */ React.createElement("div", {
      className: "bodycopy",
      style: {paddingTop: "25px"}
    }, "Current Owner"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      id: "claimUrl",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "472px", height: "28px"},
      placeholder: "your.url/to/claim",
      onChange: () => this.setState({claimUrl: document.getElementById("claimUrl").value})
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: 6}
    }, "unclaimed"))), /* @__PURE__ */ React.createElement("div", {
      className: "bodycopy",
      style: {paddingTop: "60px"}
    }, "Preparation"), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      id: "claimUrl",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "144px", height: "28px", outlineColor: "#4493BD", cursor: "pointer"},
      onChange: () => this.setState({claimUrl: document.getElementById("claimUrl").value})
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: 6}
    }, "1. Copy this"))), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingRight: "20px", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      id: "claimUrl",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "144px", height: "28px", outlineColor: "#A2C9DE"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: 6}
    }, "2. Insert it"))), /* @__PURE__ */ React.createElement("div", {
      style: {float: "left", paddingTop: "5px"}
    }, /* @__PURE__ */ React.createElement("div", {
      id: "claimUrl",
      type: "text",
      className: "mainText bodyCopy",
      style: {width: "144px", height: "28px", outlineColor: "#A2C9DE"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {padding: 6}
    }, "3. Test it"))), /* @__PURE__ */ React.createElement("div", {
      style: {display: "inline-block", paddingTop: "15px"},
      onClick: () => this.state.togglePage(this.props.page, "claim3")
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "mainText bodyCopy",
      style: {float: "left", width: "472px", outlineColor: "#4493BD"},
      content: /* @__PURE__ */ React.createElement("div", {
        style: {padding: "8px", color: "white", textAlign: "center"}
      }, "Submit")
    })), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center", paddingTop: 4}
    }, this.buttonFunction("claim")));
  }
  claim3() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
      src: "dist/images/extension/thumb/white.svg",
      alt: "logo",
      className: "logo sent",
      style: {
        height: "150px"
      }
    }), /* @__PURE__ */ React.createElement("div", {
      className: "heading1 thanks",
      style: {width: "100%"}
    }, "Congrats! You have claimed the page:"), /* @__PURE__ */ React.createElement("div", {
      className: "bodyCopy thanks",
      style: {top: "78%", width: "100%"}
    }, this.state.claimAddress));
  }
  render() {
    switch (this.state.page) {
      case "account":
        return this.account();
      case "like":
        return this.like();
      case "like2":
        return this.like2();
      case "like3":
        return this.like3();
      case "buy":
        return this.buy();
      case "send":
        return this.send();
      case "send2":
        return this.send2();
      case "send3":
        return this.send3();
      case "claim":
        return this.claim();
      case "claim2":
        return this.claim2();
      case "claim3":
        return this.claim3();
      default:
        return "work in progress";
    }
  }
}
export default MainFunctinos;
