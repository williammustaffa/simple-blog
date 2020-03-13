import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { userCheckSessionSuccess, userCheckSessionFailure } from "store/actions";

/**
 * Check if user has an existing session
 */
export function* userCheckSession() {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.userCheckSession);

    yield put(userCheckSessionSuccess(result));
  } catch (e) {
    yield put(userCheckSessionFailure(e));
  }
} 

/**
 * Watch USER_CHECK_SESSION action
 */
export function* watchUserCheckSessionAsync() {
  yield takeLatest(types.USER_CHECK_SESSION, userCheckSession);
}