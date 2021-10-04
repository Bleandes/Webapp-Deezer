import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #4B4B4B;
  height: 4rem;
`;

export const Tab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TabIcon = styled.div`
  fill: red
`;

export const TabName = styled.small`
  color: #FFFFFF
`;