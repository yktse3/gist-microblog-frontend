import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #765b4a;
  margin-left: -50px;
  margin-top: -50px;
`;

export const MainContainer = styled.div`
  background: #765b4a;
  height: 100%;
`;

export const ArticleContainer = styled.div`
  background: #765b4a;
  padding-bottom: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoutContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  background-image: linear-gradient(to right, #e5c092, #d69d56);
  padding: 5px 0;
`;

export const LogoutButton = styled.button`
  margin-left: auto;
  border: none;
  background: transparent;
  color: #2c252e;
  &:hover {
    cursor: pointer;
  }
`;
