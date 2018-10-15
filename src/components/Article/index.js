import React from 'react';
import { string, number } from 'prop-types';
import ArticleTitle from 'components/ArticleTitle';
import {
  Card,
  ContentBlock,
  CommentText,
} from './styles';

const Article = ({
  title,
  dateTime,
  content,
  numOfComment,
}) => (
  <Card>
    <ArticleTitle
      title={title}
      dateTime={dateTime}
    />
    <ContentBlock>{content}</ContentBlock>
    <CommentText>{`${numOfComment} comments`}</CommentText>
  </Card>
);

Article.propTypes = {
  title: string.isRequired,
  dateTime: string.isRequired,
  content: string.isRequired,
  numOfComment: number.isRequired,
};

export default Article;
