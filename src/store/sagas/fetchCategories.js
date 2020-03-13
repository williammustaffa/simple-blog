import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getBlogAPIConnector } from "store/api/BlogAPI";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "store/actions";

/**
 * Fetch categories data
 */
export function* fetchCategories(action) {
  try {
    const id = action.payload;
    const connector = getBlogAPIConnector();
    const result = yield call(connector.fetchCategories, id);

    yield put(fetchCategoriesSuccess(result));
  } catch (e) {
    yield put(fetchCategoriesFailure(e));
  }
} 

/**
 * Watch FETCH_CATEGORIES action
 */
export function* watchFetchCategoriesAsync() {
  yield takeLatest(types.FETCH_CATEGORIES, fetchCategories);
}