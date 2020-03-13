import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import categories from "./categories";
import posts from "./posts";
import post from "./post";
import user from "./user";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  categories,
  posts,
  post,
  user,
});

export default createRootReducer;