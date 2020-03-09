import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "../api/BlogAPI";
import types from "../types";
import { fetchPostsSuccess, fetchPostsFailure} from "../actions";

/**
 * Fetch all posts
 * by calling BlogAPIConnector
 */
export function* fetchPosts() {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.fetchPosts);

    yield put(fetchPostsSuccess(result));
  } catch (e) {
    yield put(fetchPostsFailure(e));
  }
}

/**
 * Watch FETCH_POSTS action
 */
export function* watchFetchPostsAsync() {
  yield takeLatest(types.FETCH_POSTS, fetchPosts);
}