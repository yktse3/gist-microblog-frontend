import { createAction } from 'redux-actions';

export const GET_ARTICLES_REQUEST = 'GET_ARTICLES_REQUEST';
export const getArticlesRequest = createAction(GET_ARTICLES_REQUEST);

export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const getArticlesSuccess = createAction(GET_ARTICLES_SUCCESS);

export const GET_ARTICLES_FAIL = 'GET_ARTICLES_FAIL';
export const getArticlesFail = createAction(GET_ARTICLES_FAIL);
