import React from 'react';
import renderer from 'react-test-renderer';
import { noop } from 'utils/helpers';
import { mount } from 'enzyme';
import NewComment from './index';

describe('NewComment', () => {
  it('render successfully when enabled', () => {
    const component = renderer.create(
      <NewComment
        onSubmit={noop}
        articleID="articleID"
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('change state when typing in comment box', () => {
    const wrapper = mount(
      <NewComment
        onSubmit={noop}
        articleID="articleID"
      />,
    );

    wrapper
      .find('textarea')
      .first()
      .simulate('change', {
        target: {
          value: 'new comment',
        },
      });
    expect(wrapper.state('content')).toEqual('new comment');
  });

  it('calls onSubmit with correct parameters', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <NewComment
        onSubmit={onSubmit}
        articleID="articleID"
      />,
    );

    wrapper.setState({
      content: 'new comment',
    });

    wrapper
      .find('button')
      .first()
      .simulate('click');

    expect(onSubmit).toBeCalledWith('articleID', 'new comment');

    expect(wrapper.state()).toEqual({
      content: '',
    });
  });
});
