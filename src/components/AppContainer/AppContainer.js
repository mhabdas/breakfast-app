import { FirebaseContext } from '../Firebase/context';
import Firebase from '../Firebase/Firebase';
import React, { Suspense } from 'react';
const App = React.lazy(() => import('../App/App'));

const AppContainer = () => (
	<FirebaseContext.Provider value={new Firebase()}>
		<Suspense fallback={<div />}>
			<App />
		</Suspense>
	</FirebaseContext.Provider>
);

export default AppContainer;
