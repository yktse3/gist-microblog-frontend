import { createAction } from 'redux-actions';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const getCommentsRequest = createAction(GET_COMMENTS_REQUEST);

export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const getCommentsSuccess = createAction(GET_COMMENTS_SUCCESS);

export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';
export const getCommentsFail = createAction(GET_COMMENTS_FAIL);

export const CREATE_COMMENTS_REQUEST = 'CREATE_COMMENTS_REQUEST';
export const createCommentsRequest = createAction(CREATE_COMMENTS_REQUEST);

export const CREATE_COMMENTS_SUCCESS = 'CREATE_COMMENTS_SUCCESS';
export const createCommentsSuccess = createAction(CREATE_COMMENTS_SUCCESS);

export const CREATE_COMMENTS_FAIL = 'CREATE_COMMENTS_FAIL';
export const createCommentsFAIL = createAction(CREATE_COMMENTS_FAIL);
