import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
} from 'store/actions/articles';

const defaultState = {
  isLoading: false,
  data: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTICLES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        data: payload.articles,
        isLoading: false,
      };
    default:
      return state;
  }
};
