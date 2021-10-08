import ActionType from "./actionsType";

export function setSearchText(value = "") {
  return {
    type: ActionType.SET_SEARCH_TEXT,
    value: { searchText: value },
  };
}

export function setSearchResult(value = []) {
  return {
    type: ActionType.SET_SEARCH_RESULT,
    value: { searchResult: value },
  };
}

export function setPlayer(
  value = {
    id: undefined,
    title: "Sem música",
    subtitle: ".....",
    thumbnail: "",
    src: "",
  }
) {
  return {
    type: ActionType.SET_PLAYER,
    value: { player: value },
  };
}

export function setFavorite(value = {}) {
  return {
    type: ActionType.SET_FAVORITE,
    value: value,
  };
}
