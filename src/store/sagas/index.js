import { all } from "redux-saga/effects";
import { watchFetchPostAsync } from "./fetchPost";
import { watchFetchPostsAsync } from "./fetchPosts";
import { watchFetchCategoriesAsync } from "./fetchCategories";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  yield all([
    watchFetchPostsAsync(),
    watchFetchPostAsync(),
    watchFetchCategoriesAsync(),
  ]);
}

export default root;