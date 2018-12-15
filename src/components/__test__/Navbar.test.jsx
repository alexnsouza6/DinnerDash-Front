import React from 'react';
import { mount } from 'enzyme';
import { MainNavBar } from '../Navbar';
import '../../setupTest';

let component;

const props = {
  login: {
    user: '',
  },
  logoutUser: () => {},
};

beforeEach(() => {
  component = mount(<MainNavBar {...props} />);
});

it('fires onClick when NavLink is clicked', () => {
  const handleLogoutMock = jest.spyOn(component.instance(), 'handleLogout');
  component.update();
  component.find('a#n-logout-link').simulate('click');
  expect(handleLogoutMock).toHaveBeenCalled();
});
