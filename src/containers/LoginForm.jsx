import React, { Component } from 'react';
import {
  Container, Input, FormGroup, Label, Button, Form,
} from 'reactstrap';
import '../common/stylesheets/form.css';

class LoginForm extends Component {
  state = { login: true };

  handleFormChange = () => {
    this.setState(prevState => {
      if (prevState.login) return { login: false };
      return { login: true };
    });
  };

  render() {
    const { login } = this.state;
    return (
      <div>
        <Container className="d-full-height d-align-center">
          <div className="d-full-width">
            <h1 align="center"> DinnerDash </h1>
            {login ? (
              <div>
                <Form className="d-full-width">
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <br />
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a " />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <br />
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password "
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
                    <Input type="Name" name="Name" id="exampleName" placeholder="with a " />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <br />
                    <Input type="Email" name="Email" id="exampleEmail" placeholder="Email " />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <br />
                    <Input
                      type="Password"
                      name="Password"
                      id="examplePassword"
                      placeholder="Password "
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Passowrd Confirmation</Label>
                    <br />
                    <Input
                      type="PasswordConfirmation"
                      name="PasswordConfirmation"
                      id="examplePasswordConfirmation"
                      placeholder="Password Confirmation "
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
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default LoginForm;
