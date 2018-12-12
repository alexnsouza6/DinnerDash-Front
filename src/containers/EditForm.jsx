import React, { Component } from 'react';
import {
  Container, FormGroup, Label, Button, Form, Row, Col,
} from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { editUser } from '../actions/user/userActions';
import '../common/stylesheets/form.css';

class EditForm extends Component {
  handleEditForm = userInfo => {
    const { id } = this.props.match.params;
    this.props.editUser(userInfo, id);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container fluid className="c-background">
        <Row className="d-top-image d-half-height d-left-bottom">
          <h1 className="t-color-white"> Your Profile </h1>
          <br />
          <h4 className="t-color-white"> Edit your personal info and password </h4>
        </Row>
        <Form className="f-style-form" onSubmit={handleSubmit(this.handleEditForm)}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                <br />
                <Field
                  type="text"
                  name="name"
                  className="d-full-threequarter-width"
                  component="input"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">New Password</Label>
                <br />
                <Field
                  type="password"
                  name="password"
                  className="d-full-threequarter-width"
                  component="input"
                  placeholder="New Password"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <br />
                <Field
                  type="email"
                  name="email"
                  component="input"
                  placeholder="Email"
                  className="d-full-threequarter-width"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password_confirmation">New Password Confirmation</Label>
                <br />
                <Field
                  type="password"
                  name="password_confirmation"
                  className="d-full-threequarter-width"
                  component="input"
                  placeholder="Password Confirmation"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="success" className="d-onequarter-width">
            Update my infos.
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

export default reduxForm({
  form: 'EditForm',
})(
  connect(
    mapStateToProps,
    { editUser },
  )(EditForm),
);
