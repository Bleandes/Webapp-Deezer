import { typingReducer } from './typingReducer';
import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  typingReducer: typingReducer,
  otherState: otherReducer,
});
