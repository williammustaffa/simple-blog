import { all } from "redux-saga/effects";
import { watchFetchCategoriesAsync } from "./fetchCategories";
import { watchFetchPostAsync } from "./fetchPost";
import { watchFetchPostsAsync } from "./fetchPosts";
import { watchUpdatePostAsync } from "./updatePost";
import { watchUserLoginAsync } from "./userLogin";
import { watchUserLogoutAsync } from "./userLogout";
import { watchUserCheckSessionAsync } from "./userCheckSession";
import { watchAddPostCommentAsync } from "./addPostComment";
import { watchTogglePostLikeAsync } from "./togglePostLike";
import { watchCreatePostAsync } from "./createPost";
import { watchDeletePostAsync } from "./deletePost";

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
    watchUserLogoutAsync(),
    watchUserCheckSessionAsync(),
    watchAddPostCommentAsync(),
    watchTogglePostLikeAsync(),
    watchCreatePostAsync(),
    watchDeletePostAsync(),
  ]);
}

export default root;