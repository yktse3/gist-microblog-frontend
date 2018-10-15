import React from 'react';
import { string } from 'prop-types';

import {
  Wrapper,
  Title,
  DateTimeString,
} from './styles';

const ArticleTitle = ({ title, dateTime }) => (
  <Wrapper>
    <Title>{title}</Title>
    <DateTimeString>{dateTime}</DateTimeString>
  </Wrapper>
);

ArticleTitle.propTypes = {
  title: string.isRequired,
  dateTime: string.isRequired,
};

export default ArticleTitle;
