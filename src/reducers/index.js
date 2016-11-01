import { combineReducers } from 'redux';
import listOfItems from './listOfItems';

const rootReducer = combineReducers({
  listOfItems,
});

export default rootReducer;
