import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { deletePostSuccess, deletePostFailure } from "store/actions";
import { push } from "connected-react-router";

/**
 * Delete a post by given id
 */
export function* deletePost({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.deletePost, payload);

    yield put(deletePostSuccess(result));
    yield put(push("/"));
  } catch (e) {
    yield put(deletePostFailure(e));
  }
} 

/**
 * Watch DELETE_POST action
 */
export function* watchDeletePostAsync() {
  yield takeLatest(types.DELETE_POST, deletePost);
}