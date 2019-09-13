import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const AppContainer = React.lazy(() =>
  import('./components/AppContainer/AppContainer')
);
import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log(process.env.PROD_API_KEY);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Suspense fallback={<div />}>
			<AppContainer />
		</Suspense>,
		document.getElementById('app')
	);
});
