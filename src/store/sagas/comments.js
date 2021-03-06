import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,

  CREATE_COMMENTS_REQUEST,
  CREATE_COMMENTS_SUCCESS,
  CREATE_COMMENTS_FAIL,
} from 'store/actions/comments';
import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import Api from 'utils/api';

export function* handleGetComments({ payload: { articleID, uri } }) {
  try {
    const { statusCode, body } = yield call(Api.getComments, uri);
    if (statusCode !== 200) {
      throw new Error('Cannot get comments');
    }

    yield put({
      type: GET_COMMENTS_SUCCESS,
      payload: {
        comments: {
          [articleID]: body,
        },
      },
    });
  } catch (e) {
    yield put({
      type: GET_COMMENTS_FAIL,
    });
    console.error(e);
  }
}

export function* handleCreateComment({ payload: { articleID, comment } }) {
  try {
    const { statusCode, body } = yield call(Api.createComment, articleID, comment);
    if (statusCode !== 200) {
      throw new Error('Cannot get comments');
    }

    yield put({
      type: CREATE_COMMENTS_SUCCESS,
      payload: {
        comment: {
          articleID,
          content: body,
        },
      },
    });
  } catch (e) {
    yield put({
      type: CREATE_COMMENTS_FAIL,
    });
    console.error(e);
  }
}

export default function* authSaga() {
  yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
  yield takeLatest(CREATE_COMMENTS_REQUEST, handleCreateComment);
}
