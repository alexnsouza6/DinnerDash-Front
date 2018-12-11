import { USER_CREATE, USER_EDITED } from '../../actions/consts';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CREATE:
      return { ...state, user: { payload }, loggedIn: true };
    case USER_EDITED:
      return { ...state, user: { payload }, loggedIn: true };
    default:
      return state;
  }
};
