import React, { Component } from 'react';
import {
  func,
  string,
} from 'prop-types';
import {
  CommentContent,
} from './styles';
import {
  SubmitBtn,
} from '../Editor/styles';
import {
  Card,
} from '../Article/styles';

class Editor extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    articleID: string.isRequired,
  };

  state = {
    content: '',
  };

  onChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  }

  onSubmit = () => {
    this.setState({
      content: '',
    });
    this.props.onSubmit(this.props.articleID, this.state.content);
  }

  render() {
    return (
      <Card>
        <CommentContent
          name="content"
          placeholder="Comment"
          value={this.state.content}
          onChange={this.onChange}
          autoComplete="off"
        />
        <SubmitBtn
          onClick={this.onSubmit}
        >
        Submit
        </SubmitBtn>
      </Card>
    );
  }
}

export default Editor;
