import { fork } from 'redux-saga/effects';
import auth from './auth';
import articles from './articles';
import comments from './comments';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(articles);
  yield fork(comments);
}
