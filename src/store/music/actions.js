import ActionType from "./actionsType";

export function setSearchText(value = "") {
  return {
    type: ActionType.SET_SEARCH_TEXT,
    value: { searchText: value },
  };
}
