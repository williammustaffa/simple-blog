import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { createPostSuccess, createPostFailure } from "store/actions";
import { push } from "connected-react-router";
import buildPostUrl from "utils/buildPostUrl";

/**
 * Create a post by given payload
 */
export function* createPost({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.createPost, payload);

    yield put(createPostSuccess(result));
    yield put(push(buildPostUrl(result)))
  } catch (e) {
    yield put(createPostFailure(e));
  }
} 

/**
 * Watch CREATE_POST action
 */
export function* watchCreatePostAsync() {
  yield takeLatest(types.CREATE_POST, createPost);
}