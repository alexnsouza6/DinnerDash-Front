import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import LoginForm from '../containers/LoginForm';

const divStyle = {
  display: 'block',
  width: '100%',
  height: '100vh',
};

const LandingPage = () => (
  <Fragment>
    <Row>
      <Col sm="8">
        <img src={require('../common/images/landingpage.jpg')} alt="LandingPage" style={divStyle} />
      </Col>
      <Col>
        <LoginForm />
      </Col>
    </Row>
  </Fragment>
);

export default LandingPage;
