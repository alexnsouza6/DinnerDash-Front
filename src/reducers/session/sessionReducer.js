import { USER_LOGIN, USER_LOGOUT } from '../../actions/consts';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      localStorage.setItem('userToken', JSON.stringify(payload.token));
      return { ...state, user: payload, loggedIn: true };
    case USER_LOGOUT:
      localStorage.removeItem('userToken');
      return { ...state, user: payload, loggedIn: false };
    default:
      return state;
  }
};
