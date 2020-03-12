import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import categories from "./categories";
import posts from "./posts";
import post from "./post";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  categories,
  posts,
  post,
});

export default createRootReducer;