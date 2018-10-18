import React from 'react';
import renderer from 'react-test-renderer';
import { noop } from 'utils/helpers';
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
});
