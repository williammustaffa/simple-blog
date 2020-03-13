import { all } from "redux-saga/effects";
import { watchFetchCategoriesAsync } from "./fetchCategories";
import { watchFetchPostAsync } from "./fetchPost";
import { watchFetchPostsAsync } from "./fetchPosts";
import { watchUpdatePostAsync } from "./updatePost";
import { watchUserLoginAsync } from "./userLogin";
import { watchUserCheckSessionAsync } from "./userCheckSession";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  yield all([
    watchFetchCategoriesAsync(),
    watchFetchPostsAsync(),
    watchFetchPostAsync(),
    watchUpdatePostAsync(),
    watchUserLoginAsync(),
    watchUserCheckSessionAsync(),
  ]);
}

export default root;