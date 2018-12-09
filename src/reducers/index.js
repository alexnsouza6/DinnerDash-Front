import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import sessionReducer from './session/sessionReducer';

export default combineReducers({
  form: reducer,
  login: sessionReducer,
});
