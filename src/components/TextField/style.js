import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 3.5rem;
  border: solid 2px #757575;
  border-radius: 9px;
`;

export const IconLeft = styled.div`
  flex: 2;
  padding: 12pt 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  flex: 10;
  background-color: unset;
  border: none;
  font-size: 18px;
  ::placeholder {
    color: #c9c9c9;
  }
  outline: none;
  color: #c9c9c9;
`;
