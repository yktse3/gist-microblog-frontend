import React, { Component } from 'react';
import {
  func,
  bool,
} from 'prop-types';
import Loader from 'react-loader-spinner';
import {
  noop,
} from 'utils/helpers';
import {
  Title,
  Content,
  SubmitBtn,
  LoadingContainer,
  Overlay,
} from './styles';
import {
  Card,
} from '../Article/styles';

class Editor extends Component {
  static propTypes = {
    onChange: func,
    onSubmit: func,
    disabled: bool,
  };

  static defaultProps = {
    onChange: noop,
    onSubmit: noop,
    disabled: false,
  }

  state = {
    title: '',
    content: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.onChange();
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    return (
      <Card>
        {
          this.props.disabled && (<Overlay />)
        }
        {
          this.props.disabled && (
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
        <Title
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onChange}
          autoComplete="off"
          disabled={this.props.disabled}
        />
        <Content
          name="content"
          placeholder="Content"
          value={this.state.content}
          onChange={this.onChange}
          autoComplete="off"
          disabled={this.props.disabled}
        />
        <SubmitBtn
          onClick={this.onSubmit}
          disabled={this.props.disabled}
        >
        Submit
        </SubmitBtn>
      </Card>
    );
  }
}

export default Editor;
