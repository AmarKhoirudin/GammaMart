import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../Reducer";
import thunk from "redux-thunk";

export const storeRedux = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
