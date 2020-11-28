import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const composeEnhancers = composeWithDevTools({
  /** Specify name here, actionsBlacklist, actionsCreators and other options if needed */
});

/**  compose enhancers (Redux Dev Tools, ...) with middlewares (Redux Thunk, ...) */
const enhancer = composeEnhancers(applyMiddleware(thunk));

/**  create store */
const store = createStore(rootReducer, enhancer);

/**  export store singleton instance */
export default store;
