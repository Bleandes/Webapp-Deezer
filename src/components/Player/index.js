import { IconButton } from "@mui/material";
import Play from "@mui/icons-material/PlayCircle";
import Pause from "@mui/icons-material/PauseCircle";

import { Box, Container, Thumbnail, Slider, Title, Subtitle } from "./style";
import { useCallback, useEffect, useState } from "react";

const Player = (props) => {
  const { src, thumbnail, title, subtitle } = props;
  const [progress, setProgress] = useState(0);
  const [player] = useState(new Audio(src));

  const handlePlayPause = useCallback(() => {
    if (player.paused) {
      player.play();
      return;
    }
    player.pause();
  }, [player]);

  const handleSliderInput = useCallback((e) => {
    player.currentTime = Number(e.target.value);
  }, [player]);

  useEffect(() => {
    const timeupdate = () => {
      setProgress(player.currentTime);
    };
    player.addEventListener("timeupdate", timeupdate);
    return () => {
      player.removeEventListener("timeupdate", timeupdate);
    };
  }, [player]);

  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <Box style={{ flex: 11, flexDirection: "column", padding: "8pt" }}>
        <Box style={{ flex: 1 }}>
          <Box style={{ flex: 10, flexDirection: "column" }}>
            <Title>
              {title}
            </Title>
            <Subtitle>
              {subtitle} - {player.duration.toFixed(2).replace(".", ":")} min
            </Subtitle>
          </Box>
          <Box
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => handlePlayPause()} color="primary">
              {player.paused ? <Play /> : <Pause />}
            </IconButton>
          </Box>
        </Box>
        <Box
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Slider
            type="range"
            min="0"
            step={0.1}
            max={String(player.duration)}
            value={progress}
            onInput={handleSliderInput}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Player;
