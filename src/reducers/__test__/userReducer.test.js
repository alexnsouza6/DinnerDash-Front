import userReducer from '../user/userReducer';
import { USER_CREATE, USER_EDITED } from '../../actions/consts';

let reducerMock;

describe('userReducer', () => {
  it('returns {} if type is not defined', () => {
    const DEFAULT_STATE = 'default_state';
    reducerMock = {
      type: DEFAULT_STATE,
      payload: {},
    };
    const state = userReducer({}, reducerMock);

    expect(state).toEqual({});
  });

  it('returns a object with user, logged flag and ', () => {
    reducerMock = {
      type: USER_CREATE,
      payload: {
        name: 'Xela',
        username: 'Xelinha',
        email: '123123',
        token: '123123',
        loggedIn: true,
      },
    };
    const state = userReducer({}, reducerMock);
    expect(state).toEqual(reducerMock.payload);
    expect(localStorage.getItem('userToken')).toEqual(`\"${reducerMock.payload.token}\"`);
  });

  it('returns a object with user and a logged bool', () => {
    reducerMock = {
      type: USER_EDITED,
      payload: {
        name: 'Xeba',
        username: 'Xebinha',
        email: '123123',
        token: '123123',
        loggedIn: true,
      },
    };
    const state = userReducer({}, reducerMock);
    expect(state).toEqual(reducerMock.payload);
    expect(localStorage.getItem('userToken')).toEqual(`\"${reducerMock.payload.token}\"`);
  });
});
