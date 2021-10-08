import styled from "styled-components";

const Box = styled.div`
    display: flex;
`;

export const Container = styled(Box)`
    flex: 1;
    @media (max-width: 575.98px) {  
      flex-direction: column-reverse;
    }
    flex-direction: row;
    background-color: #4B4B4B
`;

export const NavView = styled(Box)`
  @media (max-width: 575.98px) {  
    flex: 1;
  }
`;

export const PlayerView = styled(Box)`
    flex: 4;
    @media (max-width: 575.98px) {  
      background-color: #1E1E1E;
    }
`;

export const SearchView = styled(Box)`
  @media (max-width: 575.98px) {
    display: none;
  }
  @media (max-width: 767.98px) { 
    display: none;
  }
  @media (max-width: 991.98px) { 
    display: none;
  }
  align-items: center;
  justify-content: center;
  flex: 7;
`;
