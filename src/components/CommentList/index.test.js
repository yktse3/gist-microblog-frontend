import React from 'react';
import renderer from 'react-test-renderer';
import CommentList from './index';

describe('CommentList', () => {
  it('render successfully', () => {
    const component = renderer.create(
      <CommentList
        comments={
          [
            {
              userID: 'username',
              content: 'comment content',
              id: 'commentID',
            },
            {
              userID: 'username2',
              content: 'comment content2',
              id: 'commentID2',
            },
          ]
        }
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
