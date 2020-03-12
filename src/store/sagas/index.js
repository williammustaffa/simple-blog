import { all } from "redux-saga/effects";
import { watchFetchCategoriesAsync } from "./fetchCategories";
import { watchFetchPostAsync } from "./fetchPost";
import { watchFetchPostsAsync } from "./fetchPosts";
import { watchUpdatePostAsync } from "./updatePost";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  yield all([
    watchFetchCategoriesAsync(),
    watchFetchPostsAsync(),
    watchFetchPostAsync(),
    watchUpdatePostAsync(),
  ]);
}

export default root;