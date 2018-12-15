import React, { Fragment, Component } from 'react';
import { Col, Row } from 'reactstrap';
import LoginForm from '../containers/LoginForm';
import '../common/stylesheets/landingpage.css';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="8">
            <img
              src={require('../common/images/landingpage.jpg')}
              alt="LandingPage"
              className="l-image"
            />
          </Col>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default LandingPage;
