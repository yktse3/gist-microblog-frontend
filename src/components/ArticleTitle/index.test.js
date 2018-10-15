import React from 'react';
import renderer from 'react-test-renderer';
import ArticleTitle from './index';

describe('ArticleTitle', () => {
  it('render successfully', () => {
    const component = renderer.create(
      <ArticleTitle
        title="A title"
        dateTime="2018/10/15 17:13:00"
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
