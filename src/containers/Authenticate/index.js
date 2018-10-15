import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getAccessTokenRequest } from 'store/actions/auth';

class Authenticate extends Component {
  render() {
    return <div>Authenticating...</div>;
  }
}

export default compose(
  connect(null, {
    getAccessTokenRequest,
  }),
)(Authenticate);
