import React, { Component } from 'react';
import {
  Container, FormGroup, Label, Button, Form,
} from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { authUser } from '../actions/session/sessionActions';

import '../common/stylesheets/form.css';

class LoginForm extends Component {
  state = { login: true };

  handleFormChange = () => {
    this.setState(prevState => {
      if (prevState.login) return { login: false };
      return { login: true };
    });
  };

  handleAuthSubmit = userInfo => {
    this.props.authUser(userInfo);
  };

  render() {
    const { login } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <Container className="d-full-height d-align-center">
          <div className="d-full-width">
            <h1 align="center"> DinnerDash </h1>
            {login ? (
              <div>
                <Form onSubmit={handleSubmit(this.handleAuthSubmit)} className="d-full-width">
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <br />
                    <Field
                      className="d-full-width"
                      type="email"
                      name="email"
                      component="input"
                      placeholder="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <br />
                    <Field
                      className="d-full-width"
                      type="password"
                      name="password"
                      component="input"
                      placeholder="password"
                    />
                  </FormGroup>
                  <Button color="success" className="d-full-width">
                    Sign in
                  </Button>
                </Form>
                <hr />

                <div className="padding">
                  <h4> Don't have a account, yet?</h4>
                  <Button
                    outline
                    color="success"
                    className="d-full-width"
                    onClick={() => this.handleFormChange()}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Form className="d-full-width">
                  <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <br />
                    <Field
                      className="d-full-width"
                      type="text"
                      name="userName"
                      component="input"
                      placeholder="name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <br />
                    <Field
                      className="d-full-width"
                      type="email"
                      name="userEmail"
                      component="input"
                      placeholder="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <br />
                    <Field
                      className="d-full-width"
                      type="password"
                      name="userPassword"
                      component="input"
                      placeholder="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password Confirmation</Label>
                    <br />
                    <Field
                      className="d-full-width"
                      type="password"
                      name="userPasswordConfirmation"
                      component="input"
                      placeholder="password confirmation"
                    />
                  </FormGroup>
                  <Button color="success" className="d-full-width">
                    Sign in
                  </Button>
                </Form>
                <hr />
                <div className="padding">
                  <h4> Already have an account?</h4>
                  <Button
                    outline
                    color="success"
                    className="d-full-width"
                    onClick={() => this.handleFormChange()}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
})(
  connect(
    null,
    { authUser },
  )(LoginForm),
);
