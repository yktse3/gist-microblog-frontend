import React, { Component } from 'react';
import {
  string,
  number,
  func,
  arrayOf,
  shape,
  int,
} from 'prop-types';
import ArticleTitle from 'components/ArticleTitle';
import CommentList from 'components/CommentList';
import NewComment from 'components/NewComment';
import { noop } from 'utils/helpers';
import {
  Card,
  ContentBlock,
  CommentText,
} from './styles';

class Article extends Component {
  static propTypes = {
    title: string.isRequired,
    dateTime: string.isRequired,
    content: string.isRequired,
    numOfComment: number.isRequired,
    commentURL: string.isRequired,
    onCommentClicked: func,
    articleID: string.isRequired,
    comments: arrayOf(
      shape({
        id: int,
        userID: string,
        content: string,
      }),
    ),
    onCommentSubmit: func.isRequired,
  };

  static defaultProps = {
    onCommentClicked: noop,
    comments: [],
  };

  state = {};

  showComments = () => {
    if (this.props.numOfComment > 0) {
      this.props.onCommentClicked(this.props.articleID, this.props.commentURL);
    }
  }

  render() {
    const {
      title,
      dateTime,
      content,
      numOfComment,
    } = this.props;

    return (
      <div>
        <Card>
          <ArticleTitle
            title={title}
            dateTime={dateTime}
          />
          <ContentBlock>{content}</ContentBlock>
          <CommentText onClick={this.showComments}>{`${numOfComment} comments`}</CommentText>
        </Card>
        {
          this.props.comments && (
            <CommentList
              comments={this.props.comments}
            />
          )
        }
        <NewComment
          onSubmit={this.props.onCommentSubmit}
          articleID={this.props.articleID}
        />
      </div>
    );
  }
}

export default Article;
