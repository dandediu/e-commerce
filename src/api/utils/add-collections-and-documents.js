import fireStore from 'api/utils/fire-store';

const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = fireStore.collection(collectionKey);

  const batch = fireStore.batch();

  objectToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, object);
  });
  const commit = await batch.commit();

  return commit;
};

export default addCollectionAndDocuments;
