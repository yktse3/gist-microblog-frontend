import React from 'react';
import renderer from 'react-test-renderer';
import { noop } from 'utils/helpers';
import { mount } from 'enzyme';
import Editor from './index';

describe('Editor', () => {
  it('render successfully when enabled', () => {
    const component = renderer.create(
      <Editor
        onSubmit={noop}
        disabled
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render successfully when disabled', () => {
    const component = renderer.create(
      <Editor
        onSubmit={noop}
        disabled={false}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('change state when typing in content box', () => {
    const wrapper = mount(
      <Editor
        onSubmit={noop}
        disabled={false}
      />,
    );
    wrapper
      .find('textarea')
      .first()
      .simulate('change', {
        target: {
          name: 'content',
          value: 'new article content',
        },
      });
    expect(wrapper.state('content')).toEqual('new article content');
  });

  it('change state when typing in title box', () => {
    const wrapper = mount(
      <Editor
        onSubmit={noop}
        disabled={false}
      />,
    );
    wrapper
      .find('input')
      .first()
      .simulate('change', {
        target: {
          name: 'title',
          value: 'new article title',
        },
      });
    expect(wrapper.state('title')).toEqual('new article title');
  });

  it('calls onSubmit with correct parameters', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
      <Editor
        onSubmit={onSubmit}
        disabled={false}
      />,
    );

    const state = {
      title: 'new article title',
      content: 'new article content',
    };
    wrapper.setState(state);

    wrapper
      .find('button')
      .first()
      .simulate('click');

    expect(onSubmit).toBeCalledWith(state);

    expect(wrapper.state()).toEqual({
      title: '',
      content: '',
    });
  });
});
