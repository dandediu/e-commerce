import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA05PaMp44Xgxddw4QK3OcUtB4xNKYA7TM',
  authDomain: 'e-commerce-74a43.firebaseapp.com',
  projectId: 'e-commerce-74a43',
  storageBucket: 'e-commerce-74a43.appspot.com',
  messagingSenderId: '927383009319',
  appId: '1:927383009319:web:d2b49535d3e88364d33602',
  measurementId: 'G-V93CMLPM7S',
};

firebase.initializeApp(config);

export default firebase;
