import { USER_CREATE } from '../../actions/consts';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CREATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
