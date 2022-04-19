import React from "../../../snowpack/pkg/react.js";
import Button from "../Button.js";
class MoreContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleMore: props.toggleMore,
      moreType: this.props.page == "accountSelect" ? "moreAccount" : "more"
    };
  }
  actionButtons = () => {
    switch (this.props.page) {
      case "accountSelect":
        return /* @__PURE__ */ React.createElement("div", null);
      default:
        return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
          className: "bodyLabel moreRowTop",
          content: /* @__PURE__ */ React.createElement("div", {
            className: "moreButtonBottom",
            onClick: () => {
              this.state.togglePage(this.props.page, "like");
              this.state.toggleMore();
            }
          }, /* @__PURE__ */ React.createElement("img", {
            src: "dist/images/LikeOnly.svg",
            alt: "search",
            style: {marginRight: "15px", height: "25px"}
          }), /* @__PURE__ */ React.createElement("div", {
            className: "moreText"
          }, "Like URL")),
          backgroundColor: "#F9F9F9",
          backgroundColorhover: "#E7E7E7"
        }), /* @__PURE__ */ React.createElement(Button, {
          className: "bodyLabel moreRowTop",
          content: /* @__PURE__ */ React.createElement("div", {
            className: "moreButtonBottom",
            onClick: () => {
              this.state.togglePage(this.props.page, "buy");
              this.state.toggleMore();
            }
          }, /* @__PURE__ */ React.createElement("img", {
            src: "dist/images/BuyGrey.svg",
            alt: "search",
            style: {marginRight: "15px", height: "25px"}
          }), /* @__PURE__ */ React.createElement("div", {
            className: "moreText"
          }, "Buy Wika")),
          backgroundColor: "#F9F9F9",
          backgroundColorhover: "#E7E7E7"
        }), /* @__PURE__ */ React.createElement(Button, {
          className: "bodyLabel moreRowTop",
          content: /* @__PURE__ */ React.createElement("div", {
            className: "moreButtonBottom",
            onClick: () => {
              this.state.togglePage(this.props.page, "send");
              this.state.toggleMore();
            }
          }, /* @__PURE__ */ React.createElement("img", {
            src: "dist/images/SendPlane.svg",
            alt: "search",
            style: {marginRight: "15px", height: "25px"}
          }), /* @__PURE__ */ React.createElement("div", {
            className: "moreText"
          }, "Send Wika")),
          backgroundColor: "#F9F9F9",
          backgroundColorhover: "#E7E7E7"
        }), /* @__PURE__ */ React.createElement(Button, {
          className: "bodyLabel moreRowBottom",
          content: /* @__PURE__ */ React.createElement("div", {
            className: "moreButtonBottom",
            onClick: () => {
              this.state.togglePage(this.props.page, "claim");
              this.state.toggleMore();
            }
          }, /* @__PURE__ */ React.createElement("img", {
            src: "dist/images/ClaimOnly.svg",
            alt: "search",
            style: {marginRight: "15px", height: "25px"}
          }), /* @__PURE__ */ React.createElement("div", {
            className: "moreText"
          }, "Claim page ownership")),
          backgroundColor: "#F9F9F9",
          backgroundColorhover: "#E7E7E7"
        }), /* @__PURE__ */ React.createElement(Button, {
          className: "bodyLabel moreRow",
          content: /* @__PURE__ */ React.createElement("div", {
            className: "moreButtonBottom",
            onClick: () => {
              this.state.togglePage(this.props.page, "accountSelect");
              this.state.toggleMore();
            }
          }, /* @__PURE__ */ React.createElement("img", {
            src: "dist/images/extension/popup/Arrows/Connection.svg",
            alt: "search",
            style: {marginRight: "15px", height: "25px"}
          }), /* @__PURE__ */ React.createElement("div", {
            className: "moreText"
          }, "Select an account")),
          backgroundColor: "#F9F9F9",
          backgroundColorhover: "#E7E7E7"
        }));
    }
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: this.state.moreType
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRow",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.state.togglePage(this.props.page, "generate");
          this.props.newAccount();
          this.state.toggleMore();
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: "dist/images/extension/popup/user_interface/Plus Square.svg",
        alt: "search",
        style: {marginRight: "15px", height: "25px"}
      }), /* @__PURE__ */ React.createElement("div", {
        className: "moreText"
      }, "Create new account")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRow",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.state.togglePage(this.props.page, "addAccount");
          this.state.toggleMore();
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: "dist/images/Download.svg",
        alt: "search",
        style: {marginRight: "15px", height: "25px"}
      }), /* @__PURE__ */ React.createElement("div", {
        className: "moreText"
      }, "Import existing account")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), this.actionButtons(), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRowTop",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.state.togglePage(this.props.page, "wip");
          this.state.toggleMore();
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: "dist/images/extension/popup/Content/dialpad.svg",
        alt: "search",
        style: {marginRight: "15px", height: "25px"}
      }), /* @__PURE__ */ React.createElement("div", {
        className: "moreText"
      }, "Attach external QR-signer account")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRowBottom",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.state.togglePage(this.props.page, "wip");
          this.state.toggleMore();
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: "dist/images/extension/popup/Cloud and Web/server connection.svg",
        alt: "search",
        style: {marginRight: "15px", height: "25px"}
      }), /* @__PURE__ */ React.createElement("div", {
        className: "moreText"
      }, "Connect ledger device")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }));
  }
}
export default MoreContent;
