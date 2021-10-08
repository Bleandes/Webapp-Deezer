import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  background: #000;
  color: #fff;
  padding: 20px;
  width: 267px;
  height: 343px;
  flex: 3;
`;

export const Box = styled.div`
  background: #000;
  height: 50px;
  width: 50px;
  margin: 5px;
`;

export const Title = styled.h5`
  margin: 0;
  color: #e5e3e3;
  font-size: 12px;
  margin-top: 0.6rem;
`;

export const Subtitle = styled.p`
  color: #e5e3e3;
  font-size: 11px;
`;

export const Icon = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
