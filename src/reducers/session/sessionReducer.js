import { USER_LOGIN } from '../../actions/consts';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      localStorage.setItem('userToken', JSON.stringify(payload.token));
      return { ...state, ...payload };

    default:
      return state;
  }
};
