import {
  GET_ACCESS_TOKEN_REQUEST,
} from 'store/actions/auth';
import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import Api from 'utils/api';
import { replace } from 'react-router-redux';

export function* handleGetAccessToken({ payload: { code } }) {
  try {
    const { access_token } = yield call(Api.getAccessToken, { code }); // eslint-disable-line camelcase
    Api.changeAccessToken(access_token);
    sessionStorage.setItem('accessToken', access_token);
    yield put(replace('/'));
  } catch (e) {
    console.error(e);
  }
}

export default function* authSaga() {
  yield takeLatest(GET_ACCESS_TOKEN_REQUEST, handleGetAccessToken);
}
