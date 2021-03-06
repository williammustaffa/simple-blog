import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { fetchPostSuccess, fetchPostFailure } from "store/actions";

/**
 * Fetch a single post data by passing its id
 */
export function* fetchPost({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.fetchPost, payload);

    yield put(fetchPostSuccess(result));
  } catch (e) {
    yield put(fetchPostFailure(e));
  }
} 

/**
 * Watch FETCH_POST action
 */
export function* watchFetchPostAsync() {
  yield takeLatest(types.FETCH_POST, fetchPost);
}