import types from "store/types";
import { push } from "connected-react-router"
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { userLoginSuccess, createProfileFailure } from "store/actions";

/**
 * Check if credentials match on the database and redirect
 */
export function* createProfile({ payload }) {
  try {
    const connector = getBlogAPIConnector();
    const result = yield call(connector.createProfile, payload);

    // Let's log the user in as he register
    yield put(userLoginSuccess(result));
    yield put(push("/"));
  } catch (e) {
    yield put(createProfileFailure(e));
  }
} 

/**
 * Watch CREATE_PROFILE action
 */
export function* watchCreateProfileAsync() {
  yield takeLatest(types.CREATE_PROFILE, createProfile);
}