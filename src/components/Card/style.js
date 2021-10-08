import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 210px;
`;

export const Thumbnail = styled.img`
  background: #000;
  color: #fff;
  width: 210px;
  height: 210px;
`;

export const Box = styled.div`
  max-width:200px;
  display:flex;
  flex:1;
  width: 200px;
`;

export const Title = styled.h5`
  margin: 0;
  color: #e5e3e3;
  font-size: 12px;
  margin: 0.5rem 0.3rem;
`;

export const Subtitle = styled.p`
  color: #e5e3e3;
  font-size: 11px;
  margin: 0.2rem 0.3rem;
`;

export const Icon = styled.div`
  margin-left: 0.7rem;
`;
