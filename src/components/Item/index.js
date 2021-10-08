import React from "react";
import {
  Box,
  Container,
  Thumbnail,
  Title,
  Subtitle,
  Icon,
  Button,
} from "./style";

const Item = (props) => {
  const {
    thumbnail,
    title,
    subtitle,
    iconfav,
    icondetail,
    onPlay,
    onFav,
    onOpen,
    onRemove,
  } = props;
  return (
    <div>
      <Container>
        <Thumbnail onClick={() => onPlay()} src={thumbnail} />
        <Box style={{ flex: 11, flexDirection: "column", padding: "8pt" }}>
          <Box style={{ flex: 1 }}>
            <Box
              onClick={() => onPlay()}
              style={{ flex: 10, flexDirection: "column" }}
            >
              <Title>{title}</Title>
              <Subtitle>{subtitle} -</Subtitle>
            </Box>
            {typeof onFav === "function" ? (
              <Button onClick={() => onFav()}>
                <Icon>{iconfav}</Icon>
              </Button>
            ) : (
              ""
            )}
            {typeof onOpen === "function" ? (
              <Button>
                <Icon> {icondetail}</Icon>
              </Button>
            ) : (
              ""
            )}
            {typeof onRemove === "function" ? (
              <Button>
                <Icon>{iconfav}</Icon>
              </Button>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

Item.defaultProps = {
  onPlay: () => undefined,
  onFav: undefined,
  onOpen: undefined,
  onRemove: undefined,
};

export default Item;
