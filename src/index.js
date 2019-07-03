import React, { Suspense } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
const SignInPage = React.lazy(() => import("./components/SignInPage/SignInPage"));
const LandingPage = React.lazy(() => import("./components/LandingPage"));

// Main app container

function App() {
  return (
    <div>
      <Router>
        <div>
          <Suspense fallback={<div/>}>
          <Route
            exact
            path={
              process.env.NODE_ENV === 'development'
                ? ROUTES.LANDING_DEV
                : ROUTES.LANDING_PROD
            }
            component={LandingPage}
          />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
