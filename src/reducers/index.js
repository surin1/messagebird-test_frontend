import { combineReducers } from 'redux';
import messages from './messages';
import messageCreation from './messageCreation';

const appReducer = combineReducers({
  messages,
  messageCreation
})

export default appReducer;
