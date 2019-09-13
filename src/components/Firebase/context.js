import React from 'react';
const FirebaseContext = React.createContext(null);

export const withFirebase = Component => {
	const FirebaseComponent = props => <FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase}/>}
	</FirebaseContext.Consumer>;
	FirebaseComponent.displayName = 'FirebaseComponent';
	return FirebaseComponent;
};

export {FirebaseContext};
