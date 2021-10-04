import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 3.5rem;
  border: solid 2px #757575;
  margin: 2rem;
  border-radius: 9px;
`;
export const IconLeft = styled.div`
  flex: 2;
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
  font-family: cursive;
  color: #c9c9c9;
`;
