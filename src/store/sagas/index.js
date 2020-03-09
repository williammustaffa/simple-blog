import { all } from "redux-saga/effects";
import { watchFetchPostAsync } from "./fetchPost";
import { watchFetchPostsAsync } from "./fetchPosts";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  yield all([
    watchFetchPostsAsync(),
    watchFetchPostAsync(),
  ]);
}

export default root;