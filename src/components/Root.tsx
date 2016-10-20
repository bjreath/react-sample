declare var window: { __REDUX_DEVTOOLS_EXTENSION__: Function };

import * as React from "react";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as createLogger from "redux-logger";

import { Application } from "./Application";
import { chirps } from "../reducers";

function configureStore() {
  const logger = createLogger();
  const middleware: any[] = [thunkMiddleware, logger];

  return createStore(
    chirps,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

const store = configureStore();

export function Root(props) {
  return(
    <Provider store={store}>
      <Application />
    </Provider>
  );
}
