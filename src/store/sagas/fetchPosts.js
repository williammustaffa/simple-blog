import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { fetchPostsSuccess, fetchPostsFailure} from "store/actions";

/**
 * Fetch all posts
 * by calling BlogAPIConnector
 */
export function* fetchPosts({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.fetchPosts, payload);

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