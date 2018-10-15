import { createAction } from 'redux-actions';

export const GET_ACCESS_TOKEN_REQUEST = 'GET_ACCESS_TOKEN_REQUEST';
export const getAccessTokenRequest = createAction(GET_ACCESS_TOKEN_REQUEST);

export const GET_ACCESS_TOKEN_SUCCESS = 'GET_ACCESS_TOKEN_SUCCESS';
export const getAccessTokenSuccess = createAction(GET_ACCESS_TOKEN_SUCCESS);
