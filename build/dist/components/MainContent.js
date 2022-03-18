import React from "../../snowpack/pkg/react.js";
import Identicon from "../../snowpack/pkg/react-identicons.js";
import Button from "./Button.js";
import MainFunctions from "./MainFunctions.js";
import {copyToClipboard} from "../utils/misc.js";
class YourAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: props.account,
      style: props.style,
      content: props.content,
      selectAccount: props.selectAccount,
      page: props.page
    };
  }
  copyElement = (element) => () => {
    copyToClipboard(element);
  };
  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page,
      account: props.account
    };
  }
  contentInjector() {
    if (this.state.content) {
      return /* @__PURE__ */ React.createElement("div", {
        style: {paddingTop: "100px", paddingRight: "18px", paddingLeft: "18px"}
      }, this.props.content);
    }
  }
  renderSelectButtonOrOptions() {
    switch (this.props.page) {
      case "accountSelect":
        return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
          style: {position: "absolute", top: "20px", left: "450px"}
        }, /* @__PURE__ */ React.createElement("img", {
          style: {height: "30px"},
          src: "dist/images/Select.svg"
        })));
      default:
        return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
          style: {position: "absolute", top: "10px", left: "440px"}
        }, /* @__PURE__ */ React.createElement("img", {
          src: "dist/images/extension/Outline/Status/Eye.svg"
        }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("img", {
          title: "copy address",
          src: "dist/images/extension/Outline/Files/Copy.svg",
          style: {cursor: "pointer"},
          onClick: this.copyElement("account_address_element")
        })), /* @__PURE__ */ React.createElement("img", {
          style: {position: "absolute", top: "10px", left: "470px"},
          src: "dist/images/extension/Vector 2.svg"
        }), /* @__PURE__ */ React.createElement("img", {
          title: "Account Settings",
          onClick: () => this.props.toggleAccountMenu(),
          style: {position: "absolute", top: "18px", left: "468px", cursor: "pointer"},
          src: "dist/images/extension/User Interface/Menu.svg"
        }), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: "100px", paddingRight: "18px", paddingLeft: "18px"}
        }, this.props.content));
    }
  }
  render() {
    let style = this.props.style;
    return /* @__PURE__ */ React.createElement("div", {
      className: "accountBox",
      style: {...style}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "identicon",
      style: {float: "left"}
    }, /* @__PURE__ */ React.createElement(Identicon, {
      string: this.state.account.address,
      size: 40
    })), /* @__PURE__ */ React.createElement("div", {
      className: "accountName bodyCopy"
    }, this.state.account.accountName), /* @__PURE__ */ React.createElement("input", {
      id: "account_address_element",
      type: "text",
      className: "accountAddress bodyLabel",
      value: this.state.account.address,
      readOnly: true,
      style: {width: 300, border: "none"}
    }), this.renderSelectButtonOrOptions());
  }
}
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAddAccount: props.toggleAddAccount,
      page: props.page,
      togglePage: props.togglePage,
      selectAccount: props.selectAccount
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      page: props.page,
      addAccount: props.addAccount,
      accounts: props.accounts,
      accountSelected: props.accountSelected,
      randomAccount: props.randomAccount
    };
  }
  copyElement = (element) => () => {
    copyToClipboard(element);
  };
  setAccount = (phrase) => {
    if (phrase.split(" ").length % 12 === 0) {
      try {
        var addAccount = this.props.importAccountFromPhrase(phrase);
        this.state.toggleAddAccount(addAccount);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("phrase must be 12 or 24 words long");
    }
  };
  render() {
    switch (this.props.page) {
      case "welcome":
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside bodyCopy"
        }, /* @__PURE__ */ React.createElement("img", {
          src: "dist/images/gettingStarted.png",
          style: {
            position: "absolute",
            left: "6%",
            top: "7%",
            bottom: "29%",
            height: "260px"
          }
        })));
      case "setup":
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside bodyCopy"
        }, /* @__PURE__ */ React.createElement("div", null, "Wika Network is built in the Polkadot ecosystem. You can reuse an existing Polkadot address if you already have one, or create a new one from scratch."), /* @__PURE__ */ React.createElement("img", {
          className: "mainThumb",
          src: "dist/images/extension/thumb/white.svg"
        })));
      case "addAccount":
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent bodyLabel"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside"
        }, /* @__PURE__ */ React.createElement(YourAccount, {
          toggleAccountMenu: this.props.toggleAccountMenu,
          account: this.state.addAccount,
          page: this.props.page
        }), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: 25}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {padding: 5}
        }, "EXISTING 12 OR 24 WORD MNEMONIC SEED"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("textarea", {
          id: "importSeed",
          type: "text",
          className: "mainText accountBox",
          style: {height: "70px", color: "#A77121"}
        })), /* @__PURE__ */ React.createElement("div", {
          style: {float: "right", padding: "10px 10px 10px 0px"},
          onClick: () => {
            this.setAccount(document.getElementById("importSeed").value);
          }
        }, /* @__PURE__ */ React.createElement(Button, {
          className: "mainButton bodyCopy",
          style: {width: "100px"},
          content: /* @__PURE__ */ React.createElement("div", {
            style: {fontWeight: "light", textAlign: "center", padding: "8px", color: "white"}
          }, "Import")
        })), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: "50px", cursor: "pointer"},
          onClick: this.copyElement("importSeed")
        }, /* @__PURE__ */ React.createElement("img", {
          style: {float: "left", position: "relative", top: "-10px", paddingRight: "10px", cursor: "pointer"},
          src: "dist/images/extension/Outline/Files/Copy.svg"
        }), "COPY TO CLIPBOARD"))));
      case "generate":
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent bodyLabel"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside"
        }, /* @__PURE__ */ React.createElement(YourAccount, {
          toggleAccountMenu: this.props.toggleAccountMenu,
          account: this.state.addAccount,
          page: this.props.page
        }), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: 25}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {padding: 5}
        }, "GENERATED 12-WORD MNEMONIC SEED"), /* @__PURE__ */ React.createElement("textarea", {
          id: "seed",
          className: "accountBox",
          style: {color: "#A77121", width: "505px"}
        }, this.state.addAccount.phrase), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: "40px", cursor: "pointer"},
          onClick: this.copyElement("seed")
        }, /* @__PURE__ */ React.createElement("img", {
          style: {float: "left", position: "relative", top: "-10px", paddingRight: "10px"},
          src: "dist/images/extension/Outline/Files/Copy.svg"
        }), "COPY TO CLIPBOARD"), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: "40px"}
        }, /* @__PURE__ */ React.createElement("img", {
          style: {float: "left", position: "relative", top: "-2px", paddingRight: "10px"},
          src: "dist/images/extension/User Interface/exclamation triangle.svg"
        }), "Please write down your wallet's mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets."), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: "120px"}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {float: "left", position: "relative", top: "-5px", paddingRight: "10px"}
        }, /* @__PURE__ */ React.createElement("input", {
          type: "checkbox"
        })), "I have saved my mnemonic seed safely"))));
      case "generate2":
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent bodyLabel"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside"
        }, /* @__PURE__ */ React.createElement(YourAccount, {
          toggleAccountMenu: this.props.toggleAccountMenu,
          account: this.state.addAccount,
          page: this.props.page
        }), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: 25}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {padding: 5}
        }, "ACCOUNT NAME"), /* @__PURE__ */ React.createElement("input", {
          id: "accountName",
          type: "text",
          className: "mainText",
          placeholder: "<Account Name>",
          onChange: () => {
            this.state.addAccount.accountName = document.getElementById("accountName").value;
          }
        })), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: 25}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {padding: 5}
        }, "A NEW PASSWORD FOR YOUR ACCOUNT"), /* @__PURE__ */ React.createElement("input", {
          id: "password",
          type: "password",
          className: "mainText",
          placeholder: "<your password>",
          onChange: () => {
            this.state.addAccount.password = document.getElementById("password").value;
          }
        })), /* @__PURE__ */ React.createElement("div", {
          style: {paddingTop: 25}
        }, /* @__PURE__ */ React.createElement("div", {
          style: {padding: 5}
        }, "CONFIRM PASSWORD"), /* @__PURE__ */ React.createElement("input", {
          type: "password",
          className: "mainText",
          placeholder: "<your password>"
        }))));
      case "accountSelect":
        let accountArray = Object.values(this.state.accounts);
        let accountKeys = Object.keys(this.state.accounts);
        const accountInfo = accountArray.map((account, i) => {
          return /* @__PURE__ */ React.createElement("div", {
            key: i,
            style: {paddingBottom: "20px"},
            onClick: () => {
              this.state.togglePage(this.props.page, "account");
              this.props.selectAccount(accountKeys[i]);
            }
          }, /* @__PURE__ */ React.createElement(Button, {
            content: /* @__PURE__ */ React.createElement(YourAccount, {
              toggleAccountMenu: this.props.toggleAccountMenu,
              account: accountArray[i],
              page: this.props.page
            }),
            className: "a",
            backgroundColor: "white",
            backgroundColorhover: "#E7E7E7"
          }));
        });
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent bodyLabel"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside"
        }, accountInfo));
      case "account":
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
          className: "mainContent bodyLabel"
        }, /* @__PURE__ */ React.createElement("div", {
          className: "mainInside"
        }, /* @__PURE__ */ React.createElement(YourAccount, {
          toggleAccountMenu: this.props.toggleAccountMenu,
          page: this.props.page,
          account: this.props.accounts[this.props.accountSelected],
          style: {height: "430px"},
          content: /* @__PURE__ */ React.createElement(MainFunctions, {
            page: this.props.page,
            accounts: this.props.accounts,
            accountSelected: this.props.accountSelected,
            togglePage: this.state.togglePage
          })
        })));
      default:
        return /* @__PURE__ */ React.createElement("div", {
          className: "mainContent heading1"
        }, "work in progress");
    }
  }
}
export default MainContent;
