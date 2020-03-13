import types from "store/types";
import { push } from "connected-react-router"
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";

/**
 * Check if credentials match on the database and redirect
 */
export function* userLogout() {
  const connector = getBlogAPIConnector();
  yield call(connector.userLogout);

  yield put(push("/"));
} 

/**
 * Watch FETCH_POST action
 */
export function* watchUserLogoutAsync() {
  yield takeLatest(types.USER_LOGOUT, userLogout);
}