import { fork } from 'redux-saga/effects';
import auth from './auth';
import articles from './articles';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(articles);
}
