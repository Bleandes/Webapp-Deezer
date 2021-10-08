import React from 'react';
import TextField from '../components/TextField';
import Navigation from '../components/Navigation';
import Player from '../components/Player';
import Item from '../components/Item';

import routes from '../routes';
import Titles from '../components/Titles';

const Home = () => {
  const [search, setSearch] = React.useState('');
  return (
    <div>
      <TextField
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        placeholder="Search"
        icon={
          <svg
            width="33"
            height="30"
            viewBox="0 0 33 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8485 18.8679H22.4014L21.8885 18.4048C23.6836 16.4494 24.7644 13.9108 24.7644 11.1492C24.7644 4.99142 19.4339 0 12.8578 0C6.28163 0 0.951111 4.99142 0.951111 11.1492C0.951111 17.307 6.28163 22.2985 12.8578 22.2985C15.8069 22.2985 18.518 21.2864 20.6062 19.6055L21.1008 20.0858V21.4408L30.2598 30L32.9892 27.4443L23.8485 18.8679ZM12.8578 18.8679C8.2966 18.8679 4.61469 15.4202 4.61469 11.1492C4.61469 6.87822 8.2966 3.43053 12.8578 3.43053C17.4189 3.43053 21.1008 6.87822 21.1008 11.1492C21.1008 15.4202 17.4189 18.8679 12.8578 18.8679Z"
              fill="#D5D5D5"
            />
          </svg>
        }
      />
      <Titles title="Lista de Musicas" />
      <Item
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
      <Item
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
      <Item
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
      <Item
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

export default Home;
