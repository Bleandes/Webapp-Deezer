import ActionType from './actionsType';

const musicState = {
  searchText: "",
};

function reducer(state = musicState, action) {
  switch (action.type) {
    case ActionType.SET_SEARCH_TEXT:
      return { ...state, ...action.value };

    default:
      return state;
  }
}

export default reducer;
