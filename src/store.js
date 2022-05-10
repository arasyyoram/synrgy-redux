import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    todo: todoReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
