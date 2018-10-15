import styled from 'styled-components';

export const Card = styled.div`
  background-color: #f1edf1;
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: left;
`;

export const ContentBlock = styled.span`
  margin-top: 10px;
`;

export const CommentText = styled.span`
  font-size: 15px;
  color: #888481;
  margin: 10px 10px 0 auto;

  &:hover {
    cursor: pointer;
  }
`;
