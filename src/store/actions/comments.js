import { createAction } from 'redux-actions';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const getCommentsRequest = createAction(GET_COMMENTS_REQUEST);

export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const getCommentsSuccess = createAction(GET_COMMENTS_SUCCESS);

export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';
export const getCommentsFail = createAction(GET_COMMENTS_FAIL);
