import React from 'react';
import { Box, Container, Thumbnail, Title, Subtitle, Icon } from './style';

const Card = (props) => {
  const { thumbnail, title, subtitle, iconfav, icondetail } = props;
  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <Box style={{ flex: 12, flexDirection: 'column' }}>
        <Box style={{ flex: 12, flexDirection: 'column' }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle} -</Subtitle>
          <Icon>{iconfav}</Icon>
          <Icon> {icondetail}</Icon>
        </Box>
      </Box>
    </Container>
  );
};

export default Card;
