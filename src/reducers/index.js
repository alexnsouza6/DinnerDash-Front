import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import sessionReducer from './session/sessionReducer';

export default combineReducers({
  form: reducer,
  login: sessionReducer,
  toastr: toastrReducer,
});
