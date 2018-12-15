import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { URL, USER_LOGIN, USER_LOGOUT } from '../consts';
import { authUser, logoutUser } from '../session/sessionActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const userMock = {
  login: 'teste',
  senha: '123123',
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(`${URL}/login`, {
    status: 200,
    response: userMock,
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('authUser', () => {
  it('fetches a valid user login in API', done => {
    const store = mockStore({});
    store.dispatch(authUser(userMock)).then(() => moxios.wait(() => {
      const actions = store.getActions();
      expect(actions[0].payload).toEqual(userMock);
      expect(actions[0].type).toEqual(USER_LOGIN);
      done();
    }));
  });
});

describe('logoutUser', () => {
  it('destroy user`s session', () => {
    const store = mockStore({});
    store.dispatch(logoutUser(userMock)).then(() => moxios.wait(() => {
      const actions = store.getActions();
      expect(actions[0].payload).toEqual({});
      expect(actions[0].type).toEqual(USER_LOGOUT);
    }));
  });
});
