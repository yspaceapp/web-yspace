import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 0 24px;
`;
export const TabButton = styled.button`
  padding: 10px;
  background: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  & + button {
    margin-left: 8px;
  }
`;
