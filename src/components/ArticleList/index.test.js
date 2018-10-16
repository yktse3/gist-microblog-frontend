import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from './index';

describe('ArticleList', () => {
  it('render successfully', () => {
    const component = renderer.create(
      <ArticleList
        articles={[
          {
            title: 'A title',
            created_at: '2018/10/15 17:13:00',
            content: 'Content',
            comments: 1,
            id: '1',
            commentURL: 'http://whatever.com/comment/1',
          },
          {
            title: 'A title 2',
            created_at: '2018/10/15 17:12:00',
            content: 'ContentContentContentContent',
            comments: 0,
            id: '2',
            commentURL: 'http://whatever.com/comment/2',
          },
        ]
        }
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
