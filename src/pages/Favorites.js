import React from "react";
import Player from "../components/Player";
import Navigation from "../components/Navigation";

import routes from "../routes";

const Favorites = () => {
  return (
    <div>
      <Player
        title="Harder, Better, Faster, Stronger"
        subtitle="Daft Punk"
        thumbnail="https://api.deezer.com/album/302127/image"
        src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
      />
      <Navigation tabs={routes} />
    </div>
  );
};

export default Favorites;
