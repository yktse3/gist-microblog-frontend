import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Article from 'components/Article';
import { string } from 'prop-types';

class Home extends Component {
  static propTypes = {
    accessToken: string,
  };

  static defaultProps = {
    accessToken: null,
  };

  componentDidMount() {
    console.log(this.props.accessToken);
  }

  render() {
    return (
      <Article
        title="A title 2"
        dateTime="2018/10/12 17:13:00"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris, dictum porttitor lacus est nec enim. Vivamus feugiat elit lorem, eu porttitor ante ultrices id. Phasellus suscipit tellus ante, nec dignissim elit imperdiet nec. Nullam fringilla feugiat nisl. Ut pretium, metus venenatis dictum viverra, dui metus finibus enim, ac rhoncus sem lorem vitae mauris. Suspendisse ut venenatis libero. Suspendisse lorem felis, pretium in maximus id, tempor non ipsum"
        numOfComment={0}
      />
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
});

export default compose(
  connect(mapStateToProps, {}),
)(Home);
