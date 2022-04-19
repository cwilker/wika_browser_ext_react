import React from "../../../snowpack/pkg/react.js";
import Button from "../Button.js";
class AccountMenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePage: props.togglePage,
      toggleAccountMenu: props.toggleAccountMenu,
      accounts: props.accounts,
      selectAccount: props.selectAccount,
      accountSelected: props.accountSelected
    };
  }
  disconnectAccount = () => {
    this.props.selectAccount("");
    this.state.togglePage(this.props.page, "accountSelect");
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "accountMenu"
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "bodyCopy moreRowTop",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.state.togglePage(this.props.page, "generate2");
          this.props.toggleAddAccount(this.props.accounts[this.props.accountSelected]);
          this.state.toggleAccountMenu();
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
          this.state.togglePage(this.props.page, "wip");
          this.state.toggleAccountMenu();
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
          this.state.togglePage(this.props.page, "wip");
          this.state.toggleAccountMenu();
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
          this.state.togglePage(this.props.page, "accountSelect");
          this.state.toggleAccountMenu();
          var accounts = this.state.accounts;
          delete accounts[this.state.accountSelected];
          console.log(this.state.accountSelected);
          console.log(accounts);
          this.props.BACKGROUND.storage.set({accounts});
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
