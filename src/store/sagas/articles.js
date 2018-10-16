import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
} from 'store/actions/articles';
import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import Api from 'utils/api';
import { replace } from 'react-router-redux';

export function* handleGetArticleRequest() {
  try {
    const { statusCode, body } = yield call(Api.getGists);
    if (statusCode !== 200) {
      throw new Error(body);
    }
    yield put({
      type: GET_ARTICLES_SUCCESS,
      payload: {
        articles: body,
      },
    });
  } catch (e) {
    yield put({
      type: GET_ARTICLES_FAIL,
    });
    yield put(replace('/Login'));
  }
}

export default function* articleSaga() {
  yield takeLatest(GET_ARTICLES_REQUEST, handleGetArticleRequest);
}
