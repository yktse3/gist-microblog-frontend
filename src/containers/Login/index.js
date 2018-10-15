import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';
import './styles.css';
import { Container } from './styles';

class Login extends Component {
  onSuccess = response => console.log(response);
  onFailure = response => console.error(response);

  render() {
    return (
      <Container>
        <GitHubLogin
          clientId="b77a50cf0d2a3029972c"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          scope="gist"
          redirectUri="http://localhost:3000/"
          className="loginBtn"
        />
      </Container>
    );
  }
}

export default Login;
