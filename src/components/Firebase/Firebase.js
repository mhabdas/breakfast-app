import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const devConfig = {
	apiKey: process.env.DEV_API_KEY,
	authDomain: process.env.DEV_AUTH_DOMAIN,
	databaseURL: process.env.DEV_DATABASE_URL,
	projectId: process.env.DEV_PROJECT_ID,
	storageBucket: process.env.DEV_STORAGE_BUCKET,
	messagingSenderId: process.env.DEV_MESSAGING_SENDER_ID,
	appId: process.env.DEV_ID
};

const prodConfig = {
	apiKey: 'AIzaSyDHAjf4fpbVHUt0vdjEc-g_z5BqGs2dPF4',
	authDomain: 'breakfast-app-prod.firebaseapp.com',
	databaseURL:'https://breakfast-app-prod.firebaseio.com',
	projectId: 'breakfast-app-prod',
	storageBucket: '',
	messagingSenderId: '60119233345',
	appId: '1:60119233345:web:346b135db27ced70'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth = app.auth();
		this.db = app.database();
	}

	// *** Auth API ***

  doCreateUserWithEmailAndPassword = values =>
  	this.auth.createUserWithEmailAndPassword(values.email, values.password);

  doSignInWithEmailAndPassword = values =>
  	this.auth.signInWithEmailAndPassword(values.email, values.password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Breakfast API ***

  breakfast = () => this.db.ref('breakfast');
  breakfastByCountry = country => this.db.ref(`breakfast/${country}`);
}

export default Firebase;
