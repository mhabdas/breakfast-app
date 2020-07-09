import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '@constants/routes'
const LandingPage = React.lazy(() => import('@components/LandingPage'))

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Suspense fallback={<div />}>
            <Route exact path={process.env.NODE_ENV === 'development' ? ROUTES.LANDING_DEV : ROUTES.LANDING_PROD} component={LandingPage} />
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default App
