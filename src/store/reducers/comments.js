import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,

  CREATE_COMMENTS_REQUEST,
  CREATE_COMMENTS_SUCCESS,
  CREATE_COMMENTS_FAIL,
} from 'store/actions/comments';

const defaultState = {
  isLoading: false,
  isSubmitting: false,
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
    case CREATE_COMMENTS_REQUEST:
      return {
        ...state,
        isSubmitting: true,
      };
    case CREATE_COMMENTS_SUCCESS:
      if (state.comments[payload.comment.articleID] === undefined) {
        return {
          ...state,
          comments: {
            ...state.comments,
            ...{
              [payload.comment.articleID]: [
                payload.comment.content,
              ],
            },
          },
          isSubmitting: false,
        };
      }
      return {
        ...state,
        comments: {
          [payload.comment.articleID]: [
            ...state.comments[payload.comment.articleID],
            payload.comment.content,
          ],
        },
        isSubmitting: false,
      };
    case CREATE_COMMENTS_FAIL:
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};
