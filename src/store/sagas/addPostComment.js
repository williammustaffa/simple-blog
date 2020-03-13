import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { addPostCommentSuccess, addPostCommentFailure } from "store/actions";

/**
 * Fetch categories data
 */
export function* addPostComment({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.addPostComment, payload);

    yield put(addPostCommentSuccess(result));
  } catch (e) {
    yield put(addPostCommentFailure(e));
  }
} 

/**
 * Watch FETCH_CATEGORIES action
 */
export function* watchAddPostCommentAsync() {
  yield takeLatest(types.ADD_POST_COMMENT, addPostComment);
}