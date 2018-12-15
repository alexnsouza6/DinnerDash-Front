import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { URL, USER_CREATE, USER_EDITED } from '../consts';
import { signUpUser, editUser } from '../user/userActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const userMock = {
  name: 'name',
  username: 'username',
  email: 'email',
  password: 'password',
  password_confirmation: 'password_confirmation',
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(`${URL}/users`, {
    status: 200,
    response: userMock,
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('signUpUser', () => {
  it('posts an user to the API', done => {
    const store = mockStore({});
    store.dispatch(signUpUser(userMock)).then(() => moxios.wait(() => {
      const actions = store.getActions();
      expect(actions[0].payload).toEqual(userMock);
      expect(actions[0].type).toEqual(USER_CREATE);
      done();
    }));
  });
});

describe('editUser', () => {
  it('edits user info', () => {
    const store = mockStore({});
    store.dispatch(editUser(userMock)).then(() => moxios.wait(() => {
      const actions = store.getActions();
      expect(actions[0].payload).toEqual({});
      expect(actions[0].type).toEqual(USER_EDITED);
    }));
  });
});
