import React from "../../../snowpack/pkg/react.js";
import Button from "../Button.js";
import AppContext from "../../utils/context.js";
class AccountMenuContent extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  disconnectAccount = () => {
    this.context.selectAccount("");
    this.context.togglePage(this.props.page, "accountSelect");
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "accountMenu"
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "bodyCopy moreRowTop",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.context.togglePage(this.props.page, "generate2");
          this.context.toggleAddAccount(this.context.accounts[this.context.accountSelected]);
          this.context.toggleAccountMenu();
        }
      }, /* @__PURE__ */ React.createElement("div", {
        className: "accountText"
      }, "Rename")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyCopy moreRowBottom",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.context.togglePage(this.props.page, "wip");
          this.context.toggleAccountMenu();
        }
      }, /* @__PURE__ */ React.createElement("div", {
        className: "accountText"
      }, "Derive New Account")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyCopy moreRowTop",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.context.togglePage(this.props.page, "wip");
          this.context.toggleAccountMenu();
        }
      }, /* @__PURE__ */ React.createElement("div", {
        className: "accountText"
      }, "Export Account")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyCopy moreRowBottom",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.context.togglePage(this.props.page, "accountSelect");
          this.context.toggleAccountMenu();
          var accounts = this.context.accounts;
          delete accounts[this.context.accountSelected];
          console.log(this.context.accountSelected);
          console.log(accounts);
          this.context.BACKGROUND.storage.set({accounts});
          this.disconnectAccount();
        }
      }, /* @__PURE__ */ React.createElement("div", {
        className: "accountText"
      }, "Forget Account")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }));
  }
}
export default AccountMenuContent;
