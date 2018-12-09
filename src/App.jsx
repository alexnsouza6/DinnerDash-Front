import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EditForm from './containers/EditForm';

const App = () => (
  <Fragment>
    <Route path="/profile/edit" component={EditForm} />
    <Route exact path="/" component={LandingPage} />
  </Fragment>
);

export default App;
