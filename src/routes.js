import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="inerht"
        height="inerht"
        viewBox="0 0 31 31"
        fill="inerht"
      >
        <path
          d="M27.9 0H9.3C7.595 0 6.2 1.395 6.2 3.1V21.7C6.2 23.405 7.595 24.8 9.3 24.8H27.9C29.605 24.8 31 23.405 31 21.7V3.1C31 1.395 29.605 0 27.9 0ZM27.9 21.7H9.3V3.1H27.9V21.7ZM16.275 20.15C18.414 20.15 20.15 18.414 20.15 16.275V7.75H24.8V4.65H18.6V13.1905C17.949 12.6945 17.1585 12.4 16.275 12.4C14.136 12.4 12.4 14.136 12.4 16.275C12.4 18.414 14.136 20.15 16.275 20.15ZM3.1 6.2H0V27.9C0 29.605 1.395 31 3.1 31H24.8V27.9H3.1V6.2Z"
          fill="inherit"
        />
      </svg>
    ),
    componente: Home,
  },
  {
    path: "/favorites",
    name: "Favoritos",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="inerht"
        height="inerht"
        viewBox="0 0 31 31"
        fill="inerht"
      >
        <path
          d="M27.9 0H9.3C7.595 0 6.2 1.395 6.2 3.1V21.7C6.2 23.405 7.595 24.8 9.3 24.8H27.9C29.605 24.8 31 23.405 31 21.7V3.1C31 1.395 29.605 0 27.9 0ZM27.9 21.7H9.3V3.1H27.9V21.7ZM16.275 20.15C18.414 20.15 20.15 18.414 20.15 16.275V7.75H24.8V4.65H18.6V13.1905C17.949 12.6945 17.1585 12.4 16.275 12.4C14.136 12.4 12.4 14.136 12.4 16.275C12.4 18.414 14.136 20.15 16.275 20.15ZM3.1 6.2H0V27.9C0 29.605 1.395 31 3.1 31H24.8V27.9H3.1V6.2Z"
          fill="inherit"
        />
      </svg>
    ),
    componente: Favorites,
  },
];

export default routes;
