import styled, { css } from 'styled-components';

type TSelected = {
  selected: boolean;
};

export const Container = styled.div`
  min-height: 100vh;
  padding: 16px;
  background: #efefef;
`;
export const Button = styled.button<TSelected>`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid #000;
      background: #eee;
    `}

  & + button {
    margin-top: 16px;
  }
`;
