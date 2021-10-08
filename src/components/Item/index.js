import React from "react";
import { Box, Container, Thumbnail, Title, Subtitle, Icon } from "./style";

const Item = (props) => {
  const { thumbnail, title, subtitle, iconfav, icondetail, onClick } = props;
  return (
    <div>
      <Container onClick={() => onClick()}>
        <Thumbnail src={thumbnail} />
        <Box style={{ flex: 11, flexDirection: "column", padding: "8pt" }}>
          <Box style={{ flex: 1 }}>
            <Box style={{ flex: 10, flexDirection: "column" }}>
              <Title>{title}</Title>
              <Subtitle>{subtitle} -</Subtitle>
            </Box>
            <Icon>{iconfav}</Icon>
            <Icon> {icondetail}</Icon>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

Item.defaultProps = {
  onClick: () => undefined,
};

export default Item;
