import React from 'react';
import renderer from 'react-test-renderer';
import Comment from './index';

describe('Comment', () => {
  it('render successfully', () => {
    const component = renderer.create(
      <Comment
        userID="username"
        content="comment content"
        id="commentID"
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
