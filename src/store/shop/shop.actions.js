import shopTypes from './shop.types';

const updateCollections = (collections) => ({
  type: shopTypes.UPDATE_COLLECTION,
  payload: collections,
});

export default { updateCollections };
