import fireStore from 'api/utils/fire-store';

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

export default createUserProfileDocument;
