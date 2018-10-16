import styled from 'styled-components';

export const Title = styled.input`
  height: 33px;
  font-size: 20px;
  margin-bottom: 20px;
  outline-color: #d69d56;
`;

export const Content = styled.textarea`
  resize: vertical;
  font-size: 20px;
  height: 160px;
  margin-bottom: 15px;
  outline-color: #d69d56;
`;

export const SubmitBtn = styled.button`
  width: fit-content;
  border: 1px solid #2c252e;
  color: #2c252e;
  background: #d69d56;
  padding: 10px 20px;
  align-self: flex-end;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const LoadingContainer = styled.div`
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
`;

export const Overlay = styled.div`
  background: rgba(0,0,0,0.3);
  position: absolute;
  margin: -20px;
  width: 100%;  
  height: 100%;  
`;
