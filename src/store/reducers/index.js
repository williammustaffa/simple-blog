import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import posts from "./posts";
import post from "./post";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  posts,
  post,
});

export default createRootReducer;