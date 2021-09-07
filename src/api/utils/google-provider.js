import firebase from 'api/firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export default googleProvider;
