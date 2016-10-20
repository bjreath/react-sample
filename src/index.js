require("./stylesheets/birdie.scss");

var React = require("react");
var ReactDOM = require("react-dom");
var Root = require("./components/Root").Root;

ReactDOM.render(React.createElement(Root, {}), document.getElementById("app"));
