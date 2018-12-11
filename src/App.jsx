import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import LandingPage from './components/LandingPage';
import AccessPage from './containers/AccessPage';

const App = () => (
  <Fragment>
    <Route path="/profile" component={AccessPage} />
    <Route exact path="/" component={LandingPage} />
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </Fragment>
);

export default App;
