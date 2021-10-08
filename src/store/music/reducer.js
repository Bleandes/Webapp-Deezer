import ActionType from "./actionsType";

const musicState = {
  searchText: "brazil",
  searchResult: [],
  player: {
    id: undefined,
    title: "Sem música",
    subtitle: ".....",
    thumbnail: "https://api.deezer.com/album/229212592/image",
    src: "",
  },
  favorites: [],
};

function reducer(state = musicState, action) {
  switch (action.type) {
    case ActionType.SET_SEARCH_TEXT:
      return { ...state, ...action.value };
    case ActionType.SET_SEARCH_RESULT:
      return { ...state, ...action.value };
    case ActionType.SET_PLAYER:
      return { ...state, ...action.value };
    case ActionType.SET_FAVORITE:
      state.favorites.push(action.value);
      return { ...state };
    case ActionType.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((_v, i) => i !== action.value),
      };

    default:
      return state;
  }
}

export default reducer;
