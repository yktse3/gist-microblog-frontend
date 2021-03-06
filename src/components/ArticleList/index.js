import React from 'react';
import {
  shape,
  int,
  arrayOf,
  string,
  func,
} from 'prop-types';
import Article from 'components/Article';
import { noop } from 'redux-saga/utils';
import {
  ArticleContainer,
} from './styles';

const ArticleList = ({
  articles,
  onCommentClicked,
  comments,
  onCommentSubmit,
}) => (
  articles.map((article) => {
    return (
      <ArticleContainer
        key={`${article.id}_container`}
      >
        <Article
          title={article.title}
          dateTime={article.created_at}
          content={article.content}
          numOfComment={article.comments}
          key={article.id}
          articleID={article.id}
          commentURL={article.comments_url}
          onCommentClicked={onCommentClicked}
          comments={comments[article.id]}
          onCommentSubmit={onCommentSubmit}
        />
      </ArticleContainer>
    );
  })
);

ArticleList.propTypes = {
  articles: arrayOf(
    shape({
      id: string,
      title: string,
      comments: int,
      comments_url: string,
      created_at: string,
      content: string,
    }),
  ),
  onCommentClicked: func,
  comments: shape(
    arrayOf(
      shape({
        id: int,
        userID: string,
        content: string,
      }),
    ),
  ),
  onCommentSubmit: func.isRequired,
};

ArticleList.defaultProps = {
  articles: [],
  onCommentClicked: noop,
  comments: {},
};

export default ArticleList;
