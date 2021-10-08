import React from "react";
import Titles from "../../components/Titles";
import Item from "../../components/Item";
/* import Card from '../../components/Item'; */

import { Page } from "./style";

import connector from "../../store/music/connector";

const Favorites = connector((props) => {
  const { favorites, setPlayer, removeFavorite } = props;

  return (
    <Page id="jus test">
      <Titles title="Favoritos" />
      {favorites.map((music, index) => (
        <Item
          key={music.id}
          title={music.title}
          subtitle={music.artist.name}
          thumbnail={music.album.cover}
          onPlay={() =>
            setPlayer({
              id: music.id,
              title: music.title,
              subtitle: music.artist.name,
              thumbnail: music.album.cover,
              src: music.preview,
            })
          }
          onOpen={() => window.open(music.link)}
          onRemove={() => removeFavorite(index)}
          iconfav={
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
                fill="#C90808"
              />
            </svg>
          }
          icondetail={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                fill="#A4A4A4"
              />
            </svg>
          }
        />
      ))}

      {/* <Card
        title="Harder, Better, Faster, Stronger"
        subtitle="Daft Punk"
        thumbnail="https://api.deezer.com/album/302127/image"
        iconfav={
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
              fill="#C90808"
            />
          </svg>
        }
        icondetail={
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
              fill="#A4A4A4"
            />
          </svg>
        }
      />
      <Card
        title="Harder, Better, Faster, Stronger"
        subtitle="Daft Punk"
        thumbnail="https://api.deezer.com/album/302127/image"
        iconfav={
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
              fill="#C90808"
            />
          </svg>
        }
        icondetail={
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
              fill="#A4A4A4"
            />
          </svg>
        }
      /> */}
    </Page>
  );
});

export default Favorites;
