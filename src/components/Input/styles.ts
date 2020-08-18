import styled, { css } from 'styled-components/native';

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 5px;
  background: #181818;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #181818;

  ${props =>
    props.isFocused &&
    css`
      border-color: #891134;
    `}
  ${props =>
    props.isErrored &&
    css`
      border-color: #f55252;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fffde4;
  font-weight: bold;
  font-size: 15px;
`;
