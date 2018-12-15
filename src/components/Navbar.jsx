import React, { Component, Fragment } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/session/sessionActions';

export class MainNavBar extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(prevState => !prevState.isOpen);
  };

  handleLogout = () => {
    this.props.logoutUser(this.props.login.user);
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Navbar className="navbar fixed-top navbar-light bg-faded" expand="md">
          <NavbarBrand href="/" style={{ color: 'white' }}>
            DinnerDash
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile/edit" style={{ color: 'white' }}>
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => this.handleLogout()}
                  style={{ cursor: 'pointer', color: 'white' }}
                  className="navbar-style"
                  id="n-logout-link"
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

export default connect(
  mapStateToProps,
  { logoutUser },
)(MainNavBar);
