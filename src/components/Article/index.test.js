import React from 'react';
import renderer from 'react-test-renderer';
import { noop } from 'utils/helpers';
import { mount } from 'enzyme';
import Article from './index';

describe('Article', () => {
  it('render successfully', () => {
    const component = renderer.create(
      <Article
        title="A title"
        dateTime="2018/10/15 17:13:00"
        content="Content"
        numOfComment={1}
        key="1"
        articleID="1"
        commentURL="http://whatever.com/comment/1"
        onCommentClicked={noop}
        comments={[]}
        onCommentSubmit={noop}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClick event when click on comment text', () => {
    const onCommentClicked = jest.fn();
    const wrapper = mount(
      <Article
        title="A title"
        dateTime="2018/10/15 17:13:00"
        content="Content"
        numOfComment={1}
        key="1"
        articleID="1"
        commentURL="http://whatever.com/comment/1"
        onCommentClicked={onCommentClicked}
        comments={[]}
        onCommentSubmit={noop}
      />,
    );
    wrapper.find('span').at(3).simulate('click');
    expect(onCommentClicked).toBeCalledWith('1', 'http://whatever.com/comment/1');
  });
});
