import React from 'react';
import { Box, Container, Thumbnail, Title, Subtitle, Icon } from './style';

const Card = (props) => {
  const { thumbnail, title, subtitle, iconfav, icondetail } = props;
  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <Box style={{ flexDirection: 'row' }}>
        <Box style={{ flex: 12, flexDirection: 'column' }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Box>
        <Box
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: '1rem',
          }}
        >
          <Icon>{iconfav}</Icon>
          <Icon> {icondetail}</Icon>
        </Box>
      </Box>
    </Container>
  );
};

export default Card;
