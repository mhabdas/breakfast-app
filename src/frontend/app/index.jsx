import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignInPage from '../components/SignInPage/SignInPage';
import LandingPage from '../components/LandingPage';

// Main app container

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </div>
      </Router>
    </div>
  );
}

document
  .addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App />, document.getElementById('app'),
    );
  });
