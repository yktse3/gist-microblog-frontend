import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ArticleList from 'components/ArticleList';
import {
  func,
  shape,
  bool,
  int,
  arrayOf,
  string,
} from 'prop-types';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getArticlesRequest } from 'store/actions/articles';
import {
  LoadingContainer,
} from './styles';

class Home extends Component {
  static propTypes = {
    history: shape({
      push: func,
    }).isRequired,
    getArticlesRequest: func.isRequired,
    isLoading: bool.isRequired,
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

  componentDidMount() {
    if (sessionStorage.getItem('accessToken') === null) {
      this.props.history.push('/Login');
    }
    this.props.getArticlesRequest();
  }

  render() {
    return (
      <div>
        {
          this.props.isLoading && (
            <LoadingContainer>
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height="100"
                width="100"
              />
            </LoadingContainer>
          )
        }
        {
          !this.props.isLoading && (
            <ArticleList
              articles={this.props.articles}
            />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.articles.isLoading,
  articles: state.articles.data,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getArticlesRequest,
  }),
)(Home);
