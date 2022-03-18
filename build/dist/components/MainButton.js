import React from "../../snowpack/pkg/react.js";
import Button from "./Button.js";
class MainButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleAddAccount: props.toggleAddAccount,
      addSelectAccount: props.addSelectAccount
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page
    };
  }
  disconnectAccount = () => {
    this.props.selectAccount("");
    this.state.togglePage(this.props.page, "accountSelect");
  };
  render() {
    switch (this.props.page) {
      case "welcome":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => this.state.togglePage(this.props.page, "setup")
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Get Started")
        })));
      case "like":
      case "like2":
      case "like3":
      case "buy":
      case "send":
      case "send2":
      case "send3":
      case "claim":
      case "claim2":
      case "claim3":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => this.state.togglePage(this.props.page, "account")
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            id: "asdf",
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Back"),
          backgroundColor: "#303D48",
          backgroundColorhover: "black"
        })));
      case "account":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => this.disconnectAccount()
        }, /* @__PURE__ */ React.createElement("img", null), /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Disconnect Account"),
          backgroundColor: "#303D48",
          backgroundColorhover: "black"
        })));
      case "setup":
        return /* @__PURE__ */ React.createElement("div", {
          style: {display: "inline"}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            float: "left",
            background: "#F0F0F0",
            height: "75px",
            width: "275px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => {
            this.state.togglePage(this.props.page, "generate");
            this.props.newAccount();
          }
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Create Account"),
          style: {width: "220px"}
        }))), /* @__PURE__ */ React.createElement("div", {
          style: {
            float: "left",
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "275px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => this.state.togglePage(this.props.page, "addAccount")
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Import Account"),
          style: {width: "220px"}
        }))));
      case "addAccount":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => {
            this.state.togglePage(this.props.page, "generate2");
          }
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Next Step")
        })));
      case "generate":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => {
            this.state.togglePage(this.props.page, "generate2");
          }
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Next Step")
        })));
      case "generate2":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            float: "left",
            background: "#F0F0F0",
            height: "75px",
            width: "80px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => {
            this.state.togglePage(this.props.page, this.props.previousPage);
          }
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "12px", color: "white"}
          }, "<"),
          style: {width: "50px", left: "52.5px"},
          backgroundColor: "#303D48",
          backgroundColorhover: "black"
        }))), /* @__PURE__ */ React.createElement("div", {
          style: {
            float: "left",
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "470px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => {
            this.state.togglePage(this.props.page, "account");
            this.props.addSelectAccount(this.props.addAccount);
            this.state.toggleAddAccount({accountName: "<Account Name>", address: "N/A"});
          }
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, "Next Step"),
          style: {width: "415px", left: "235px"}
        }))));
      case "accountSelect":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F9F9F9",
            height: "75px",
            width: "550px"
          }
        });
      default:
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            position: "relative",
            background: "#F0F0F0",
            height: "75px",
            width: "550px"
          }
        }, /* @__PURE__ */ React.createElement("div", {
          onClick: () => this.state.togglePage(this.props.page, "welcome")
        }, /* @__PURE__ */ React.createElement(Button, {
          content: /* @__PURE__ */ React.createElement("div", {
            className: "bodyCopy",
            style: {padding: "14px", color: "white"}
          }, /* @__PURE__ */ React.createElement("div", null, "Work in progress"))
        })));
    }
  }
}
export default MainButton;