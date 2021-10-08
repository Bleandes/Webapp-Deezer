import { Box, Container, Thumbnail, Slider, Title, Subtitle } from './style';
import { useCallback, useEffect, useState } from 'react';

const Player = (props) => {
  const { src, thumbnail, title, subtitle } = props;
  const [progress, setProgress] = useState(0);
  const [player] = useState(new Audio(src));

  useEffect(() => {
    player.src = src;
  }, [src]);

  const handlePlayPause = useCallback(() => {
    if (player.paused) {
      player.play();
      return;
    }
    player.pause();
  }, [player]);

  const handleSliderInput = useCallback(
    (e) => {
      player.currentTime = Number(e.target.value);
    },
    [player],
  );

  useEffect(() => {
    const timeupdate = () => {
      setProgress(player.currentTime);
    };
    player.addEventListener('timeupdate', timeupdate);
    return () => {
      player.removeEventListener('timeupdate', timeupdate);
    };
  }, [player]);

  return (
    <Container>
      <Box style={{ flex: 1, alignItems: 'center', padding: '6pt' }}>
        <Thumbnail src={thumbnail} />
      </Box>
      <Box style={{ flex: 10, flexDirection: 'column', padding: '8pt' }}>
        <Box style={{ flex: 1 }}>
          <Box
            style={{
              flex: 10,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Title>{title}</Title>
            <Subtitle>
              {subtitle} - {player.duration.toFixed(2).replace('.', ':')} min
            </Subtitle>
          </Box>
          <Box
            style={{
              flex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <buttom onClick={() => handlePlayPause()} color="primary">
              {player.paused ? 'Play' : 'Pause'}
            </buttom>
          </Box>
        </Box>
        <Box
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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
