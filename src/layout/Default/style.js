import styled from "styled-components";

export const Box = styled.div`
  display: flex;
`;

export const Container = styled(Box)`
  flex: 1;
  width: 100%;
  hegiht: 100%;
  flex-direction: column;
  @media (min-width: 768px) { 
    flex-direction: column-reverse;
  }
`;

export const NavigatorView = styled(Box)`
  flex: 0.5;
`;

export const PageView = styled(Box)`
  flex: 11.5;
  overflow: hidden;
  overflow-y: scroll;
  padding: 8pt 8pt 0;
`;
