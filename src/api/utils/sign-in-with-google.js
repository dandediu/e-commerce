import firebase from 'api/firebase';
import auth from 'api/utils/auth';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;
