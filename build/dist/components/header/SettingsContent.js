import React from "../../../snowpack/pkg/react.js";
import Button from "../Button.js";
import AppContext from "../../utils/context.js";
class SettingsContent extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "settings"
    }, /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRow",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "bodyLabel"
      }, "THEME"), /* @__PURE__ */ React.createElement("div", {
        className: "bodyCopy"
      }, "LIGHT ", /* @__PURE__ */ React.createElement("label", {
        className: "switch"
      }, /* @__PURE__ */ React.createElement("input", {
        type: "checkbox"
      }), /* @__PURE__ */ React.createElement("span", {
        className: "slider round"
      })), " DARK")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRowTop",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.context.togglePage(this.props.page, "wip");
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: "dist/images/keyhole.svg",
        alt: "search",
        style: {marginRight: "15px", height: "25px"}
      }), /* @__PURE__ */ React.createElement("div", {
        className: "moreText"
      }, "Manage Website Access")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }), /* @__PURE__ */ React.createElement(Button, {
      className: "bodyLabel moreRowBottom",
      content: /* @__PURE__ */ React.createElement("div", {
        className: "moreButtonBottom",
        onClick: () => {
          this.context.togglePage(this.props.page, "wip");
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: "dist/images/window.svg",
        alt: "search",
        style: {marginRight: "15px", height: "25px"}
      }), /* @__PURE__ */ React.createElement("div", {
        className: "moreText"
      }, "Open extension in new window")),
      backgroundColor: "#F9F9F9",
      backgroundColorhover: "#E7E7E7"
    }));
  }
}
export default SettingsContent;
