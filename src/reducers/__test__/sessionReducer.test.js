import sessionReducer from '../session/sessionReducer';
import { USER_LOGIN, USER_LOGOUT } from '../../actions/consts';

let reducerMock;

describe('sessionReducer', () => {
  it('returns {} if type is not defined', () => {
    const DEFAULT_STATE = 'default_state';
    reducerMock = {
      type: DEFAULT_STATE,
      payload: {},
    };
    const state = sessionReducer({}, reducerMock);

    expect(state).toEqual({});
  });

  it('returns a object with user and a logged bool', () => {
    reducerMock = {
      type: USER_LOGIN,
      payload: {
        name: 'Xela',
        username: 'Xelinha',
        email: '123123',
        token: '123123',
        loggedIn: true,
      },
    };
    const state = sessionReducer({}, reducerMock);
    expect(state).toEqual(reducerMock.payload);
    expect(localStorage.getItem('userToken')).toEqual(`\"${reducerMock.payload.token}\"`);
  });

  it('returns a object with user and a logged bool', () => {
    reducerMock = {
      type: USER_LOGOUT,
      payload: {
        loggedIn: false,
      },
    };
    const state = sessionReducer({}, reducerMock);
    expect(state).toEqual(reducerMock.payload);
    expect(localStorage.getItem('userToken')).toBeNull();
  });
});
