import React from 'react';
import { string, shape, arrayOf } from 'prop-types';
import Comment from 'components/Comment';
import {
  CommentBlock,
} from './styles';

const CommentList = ({ comments }) => (
  <CommentBlock>
    {
      comments.map(comment => (
        <Comment
          userID={comment.userID}
          content={comment.content}
          key={comment.id}
        />
      ))
    }
  </CommentBlock>
);

CommentList.propTypes = {
  comments: arrayOf(
    shape({
      id: string,
      userID: string,
      content: string,
    }),
  ).isRequired,
};

export default CommentList;
