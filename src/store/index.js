import { combineReducers, createStore } from "redux";
import music from "./music/reducer";

const reducers = combineReducers({
  music,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
