import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) => collections[collectionUrlParam]);

export default { selectShopCollections, selectCollection };
