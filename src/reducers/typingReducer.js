const initialState = {
  newValue: '',
};
export const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};