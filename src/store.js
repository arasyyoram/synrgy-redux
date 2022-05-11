import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";
import postReducer from "./reducer/postReducer";
import thunk from "redux-thunk";

// redux devtools config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    post: postReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;
