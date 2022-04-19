import React from "../../../snowpack/pkg/react.js";
import AppContext from "../../utils/context.js";
class SearchContent extends React.Component {
  static contextType = AppContext;
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "popup"
    }, /* @__PURE__ */ React.createElement("input", {
      className: "search",
      autoFocus: true,
      type: "text",
      name: "search",
      placeholder: "Search"
    }));
  }
}
export default SearchContent;
