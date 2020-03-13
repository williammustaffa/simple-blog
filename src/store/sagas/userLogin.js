import types from "../types";
import { push } from "connected-react-router"
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "../api/BlogAPI";
import { userLoginSuccess, userLoginFailure } from "../actions";

/**
 * Check if credentials match on the database and redirect
 */
export function* userLogin({ payload }) {
  try {
    const { redirectUrl } = payload;
    const connector = getBlogAPIConnector();
    const result = yield call(connector.userLogin, payload);

    yield put(userLoginSuccess(result));
    yield put(push(redirectUrl))
  } catch (e) {
    yield put(userLoginFailure(e));
  }
} 

/**
 * Watch FETCH_POST action
 */
export function* watchUserLoginAsync() {
  yield takeLatest(types.USER_LOGIN, userLogin);
}