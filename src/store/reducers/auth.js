import {
  GET_ACCESS_TOKEN_SUCCESS,
} from 'store/actions/auth';

const defaultState = {
  accessToken: null,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
