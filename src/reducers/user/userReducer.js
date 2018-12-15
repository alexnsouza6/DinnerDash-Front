import { USER_CREATE, USER_EDITED } from '../../actions/consts';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CREATE:
      localStorage.setItem('userToken', JSON.stringify(payload.token));
      return { ...state, ...payload, loggedIn: true };
    case USER_EDITED:
      return { ...state, ...payload, loggedIn: true };
    default:
      return state;
  }
};
