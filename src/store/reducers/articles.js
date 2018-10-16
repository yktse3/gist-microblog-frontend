import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,

  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL,
} from 'store/actions/articles';

const defaultState = {
  isLoading: false,
  isSubmitting: false,
  data: [],
  lastPage: 1,
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
        lastPage: payload.lastPage,
        isLoading: false,
      };
    case CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        isSubmitting: true,
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        data: [
          payload.article,
          ...state.data,
        ],
      };
    case CREATE_ARTICLE_FAIL:
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};
