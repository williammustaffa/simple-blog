import types from "store/types";
import { push } from "connected-react-router"
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { userLoginSuccess, userLoginFailure } from "store/actions";

/**
 * Check if credentials match on the database and redirect
 */
export function* userLogin({ payload }) {
  try {
    const { redirectUrl } = payload;
    const connector = getBlogAPIConnector();
    const result = yield call(connector.userLogin, payload);

    yield put(userLoginSuccess(result));
    yield put(push(redirectUrl));
  } catch (e) {
    yield put(userLoginFailure(e));
  }
} 

/**
 * Watch USER_LOGIN action
 */
export function* watchUserLoginAsync() {
  yield takeLatest(types.USER_LOGIN, userLogin);
}