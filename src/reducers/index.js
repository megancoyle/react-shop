// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import items from './itemReducers';

 export default combineReducers({
   items: items,
 });
