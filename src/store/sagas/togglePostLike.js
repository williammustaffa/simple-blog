import types from "store/types";
import { put, call, takeEvery } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { togglePostLikeSuccess, togglePostLikeFailure } from "store/actions";

/**
 * Fetch categories data
 */
export function* togglePostLike({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.togglePostLike, payload);

    yield put(togglePostLikeSuccess(result));
  } catch (e) {
    yield put(togglePostLikeFailure(e));
  }
} 

/**
 * Watch FETCH_CATEGORIES action
 */
export function* watchTogglePostLikeAsync() {
  yield takeEvery(types.TOGGLE_POST_LIKE, togglePostLike);
}