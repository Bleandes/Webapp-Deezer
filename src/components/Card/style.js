import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  background: #000;
  color: #fff;
  width: 267px;
  height: 283px;
`;

export const Box = styled.div`
  flex:12;
  width: 200px;
  height: 343px;
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
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
`;
