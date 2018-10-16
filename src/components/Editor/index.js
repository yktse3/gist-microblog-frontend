import React from 'react';
import {
  Title,
  Content,
  SubmitBtn,
} from './styles';
import {
  Card,
} from '../Article/styles';

const Editor = () => (
  <Card>
    <Title
      placeholder="Title"
    />
    <Content
      placeholder="Content"
    />
    <SubmitBtn>Submit</SubmitBtn>
  </Card>
);

export default Editor;
