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

const auth = firebase.auth();
const fireStore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('ERROR CREATING USER', error.message);
    }
  }

  return userRef;
};

export { auth, fireStore, signInWithGoogle, createUserProfileDocument };

export default firebase;
