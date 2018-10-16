import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ArticleList from 'components/ArticleList';
import Editor from 'components/Editor';
import {
  func,
  shape,
  bool,
  int,
  arrayOf,
  string,
  number,
} from 'prop-types';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import {
  getArticlesRequest,
  createArticleRequest,
} from 'store/actions/articles';
import {
  LoadingContainer,
  MainContainer,
  ArticleContainer,
  PaginationContainer,
} from './styles';
require('./paginationStyle.css');

class Home extends Component {
  static propTypes = {
    history: shape({
      push: func,
    }).isRequired,
    getArticlesRequest: func.isRequired,
    createArticleRequest: func.isRequired,
    isLoading: bool.isRequired,
    isSubmitting: bool.isRequired,
    lastPage: number.isRequired,
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

  static defaultProps = {
    articles: [],
  };

  state = {
    currentPage: 1,
  };

  componentDidMount() {
    if (sessionStorage.getItem('accessToken') === null) {
      this.props.history.push('/Login');
    }
    this.props.getArticlesRequest({ page: this.state.currentPage });
  }

  onSubmit = (data) => {
    this.props.createArticleRequest(data);
  }

  handlePageClick = (data) => {
    console.log(data.selected + 1);
    this.setState({ currentPage: data.selected + 1 }, () => {
      this.props.getArticlesRequest({ page: this.state.currentPage });
    });
  }

  render() {
    return (
      <MainContainer>
        {
          this.props.isLoading && (
            <LoadingContainer>
              <Loader
                type="TailSpin"
                color="#d69d56"
                height="100"
                width="100"
              />
            </LoadingContainer>
          )
        }
        {
          !this.props.isLoading && (
            <ArticleContainer>
              <Editor
                onSubmit={this.onSubmit}
                disabled={this.props.isSubmitting}
              />
              <ArticleList
                articles={this.props.articles}
              />
            </ArticleContainer>
          )
        }
        {
          !this.props.isLoading && (
            <PaginationContainer>
              <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="break"
                pageCount={this.props.lastPage}
                forcePage={this.state.currentPage - 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName="pagination"
                pageClassName="pages"
                pageLinkClassName="page_link"
                previousClassName="page_prev"
                nextClassName="page_next"
                activeClassName="active"
                disabledClassName="page_disabled"
              />
            </PaginationContainer>
          )
        }
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.articles.isLoading,
  isSubmitting: state.articles.isSubmitting,
  articles: state.articles.data,
  lastPage: state.articles.lastPage,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getArticlesRequest,
    createArticleRequest,
  }),
)(Home);
