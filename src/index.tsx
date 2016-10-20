declare var require: any;
declare var module: { hot: any };

const styles = require("./stylesheets/birdie.scss");

import * as React from "react";
import * as ReactDOM from "react-dom";
const AppContainer = require("react-hot-loader").AppContainer;
import { Root } from "./components/Root";

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NextRoot = require('./components/Root').Root;
    ReactDOM.render(
      <AppContainer>
         <NextRoot />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}