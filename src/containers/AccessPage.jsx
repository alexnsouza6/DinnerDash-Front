import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EditForm from './EditForm';
import '../common/stylesheets/navbar.css';
import '../common/stylesheets/footer.css';

class AccessPage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Route path="/profile/edit/:id" component={EditForm} />
        <Footer />
      </Fragment>
    );
  }
}

export default AccessPage;
