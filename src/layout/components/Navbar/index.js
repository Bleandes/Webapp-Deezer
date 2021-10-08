import { useDispatch } from "react-redux";
import Navigation from "../../../components/Navigation";
import Player from "../../../components/Player";
import TextField from "../../../components/TextField";

import { Container, NavView, PlayerView, SearchView } from "./style";

import routes from "../../../routes";

import connector from "../../../store/music/connector";

function Component(props) {
  const { searchText, setSearchText, player } = props;
  const dispatch = useDispatch();

  return (
    <Container>
      <NavView>
        <Navigation tabs={routes} />
      </NavView>
      <PlayerView>
        <Player
          title={player.title}
          subtitle={player.subtitle}
          thumbnail={player.thumbnail}
          src={player.src}
        />
      </PlayerView>
      <SearchView>
        <TextField
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
          placeholder="Search"
          icon={
            <svg
              width="inerht"
              height="inerht"
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
      </SearchView>
    </Container>
  );
}

export const Navbar = connector(Component);
export default Navbar;
