import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL,
} from 'store/actions/articles';
import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import Api from 'utils/api';
import { replace } from 'react-router-redux';

export function* handleGetArticleRequest({ payload: { page } }) {
  try {
    const { statusCode, body } = yield call(Api.getGists, page);
    if (statusCode !== 200) {
      throw new Error(body);
    }
    yield put({
      type: GET_ARTICLES_SUCCESS,
      payload: {
        articles: body.articles,
        lastPage: body.pages.last,
      },
    });
  } catch (e) {
    yield put({
      type: GET_ARTICLES_FAIL,
    });
    yield put(replace('/Login'));
  }
}

export function* handleCreateArticleRequest({ payload: { title, content } }) {
  try {
    const { statusCode, body } = yield call(Api.createGist, title, content);
    if (statusCode !== 200) {
      throw new Error(body);
    }
    yield put({
      type: CREATE_ARTICLE_SUCCESS,
      payload: {
        article: body,
      },
    });
  } catch (e) {
    yield put({
      type: CREATE_ARTICLE_FAIL,
    });
  }
}

export default function* articleSaga() {
  yield takeLatest(GET_ARTICLES_REQUEST, handleGetArticleRequest);
  yield takeLatest(CREATE_ARTICLE_REQUEST, handleCreateArticleRequest);
}
