import React from 'react';
import { string } from 'prop-types';
import {
  User,
  Content,
} from './styles';
import {
  Card,
} from '../Article/styles';

const Comment = ({ userID, content }) => (
  <Card>
    <User>{`${userID} replied:`}</User>
    <Content>{content}</Content>
  </Card>
);

Comment.propTypes = {
  userID: string.isRequired,
  content: string.isRequired,
};

export default Comment;
