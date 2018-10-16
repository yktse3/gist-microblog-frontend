import React from 'react';
import {
  shape,
  int,
  arrayOf,
  string,
} from 'prop-types';
import Article from 'components/Article';
import {
  ArticleContainer,
} from './styles';

const ArticleList = ({
  articles,
}) => (
  articles.map((article) => {
    return (
      <ArticleContainer
        key={`${article.id}_container`}
        id={new Date().getTime()}
      >
        <Article
          title={article.title}
          dateTime={article.created_at}
          content={article.content}
          numOfComment={article.comments}
          key={article.id}
          commentURL={article.comments_url}
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
};

ArticleList.defaultProps = {
  articles: [],
};

export default ArticleList;
