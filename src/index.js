require("./stylesheets/birdie.scss");
var React = require("react");
var ReactDOM = require("react-dom");
var Birdie = require("./Birdie").Birdie;

ReactDOM.render(React.createElement(Birdie, {}), document.getElementById("birdie"));
