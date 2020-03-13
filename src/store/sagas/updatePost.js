import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { updatePostSuccess, updatePostFailure } from "store/actions";

/**
 * Update post by given id
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