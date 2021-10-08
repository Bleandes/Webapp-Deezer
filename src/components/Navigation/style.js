import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #4b4b4b;
  justify-content: center;
  flex: 1;
`;

export const Tab = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4pt
`;

export const TabIcon = styled.div`
  fill: red;
  width: 1.5rem;
`;

export const TabName = styled.small`
  color: #ffffff;
`;
