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
	apiKey: process.env.PROD_API_KEY,
	authDomain: process.env.PROD_AUTH_DOMAIN,
	databaseURL: process.env.PROD_DATABASE_URL,
	projectId: process.env.PROD_PROJECT_ID,
	storageBucket: process.env.PROD_STORAGE_BUCKET,
	messagingSenderId: process.env.PROD_MESSAGING_SENDER_ID,
	appId: process.env.PROD_ID
};


const config =
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


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
