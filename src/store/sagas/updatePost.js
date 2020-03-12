import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "../api/BlogAPI";
import { updatePostSuccess, updatePostFailure } from "../actions";
import types from "../types";

/**
 * Fetch a single post data by passing its id
 */
export function* updatePost({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.updatePost, payload);
    console.log("PRAIA", payload);
    yield put(updatePostSuccess(result));
  } catch (e) {
    yield put(updatePostFailure(e));
  }
} 

/**
 * Watch FETCH_POST action
 */
export function* watchUpdatePostAsync() {
  yield takeLatest(types.UPDATE_POST, updatePost);
}