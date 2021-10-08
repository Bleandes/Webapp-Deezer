import styled from 'styled-components';

const Box = styled.div`
  display: flex;
`;

export const Page = styled(Box)`
  flex: 1;
  flex-direction: column;
`;
export const SearchDesktop = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  display: none;
`;
