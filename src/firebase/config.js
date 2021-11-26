import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBKP0zHDi3dSf7yg7iNfI03-3pldJLcZEo',
	authDomain: 'projectmanagementsite-59804.firebaseapp.com',
	projectId: 'projectmanagementsite-59804',
	storageBucket: 'projectmanagementsite-59804.appspot.com',
	messagingSenderId: '454870018475',
	appId: '1:454870018475:web:87ecfb8067e9d9a8a6caee',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
