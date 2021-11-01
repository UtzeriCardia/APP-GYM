import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSagas);
