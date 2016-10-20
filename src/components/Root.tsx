import * as React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as createLogger from "redux-logger";

import { Application } from "./Application";
import { chirps } from "../reducers";

function configureStore() {
  const logger = createLogger();
  const middleware: any[] = [thunkMiddleware, logger];

  return createStore(chirps, applyMiddleware(...middleware));
}

const store = configureStore();

export function Root(props) {
  return(
    <Provider store={store}>
      <Application />
    </Provider>
  );
}
