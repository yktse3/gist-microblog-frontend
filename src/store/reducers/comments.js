import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from 'store/actions/comments';

const defaultState = {
  isLoading: false,
  comments: {},
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: {
          ...state.comments,
          ...payload.comments,
        },
      };
    case GET_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
