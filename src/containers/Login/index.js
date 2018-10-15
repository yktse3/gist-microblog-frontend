import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import GitHubLogin from 'react-github-login';
import { func } from 'prop-types';
import './styles.css';
import { getAccessTokenRequest } from 'store/actions/auth';
import { Container } from './styles';

class Login extends Component {
  static propTypes = {
    getAccessTokenRequest: func.isRequired,
  };

  onSuccess = response => this.props.getAccessTokenRequest(response);

  onFailure = response => console.error(response);

  render() {
    return (
      <Container>
        <GitHubLogin
          clientId="b77a50cf0d2a3029972c"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          scope="gist"
          redirectUri="http://localhost:3000/callback"
          className="loginBtn"
        />
      </Container>
    );
  }
}

export default compose(
  connect(null, {
    getAccessTokenRequest,
  }),
)(Login);
