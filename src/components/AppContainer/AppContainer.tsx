import { FirebaseContext } from '../Firebase/FirebaseContext'
import Firebase from '../Firebase'
import React, { Suspense } from 'react'
const App = React.lazy(() => import('../App'))

const AppContainer = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  </FirebaseContext.Provider>
)

export default AppContainer
