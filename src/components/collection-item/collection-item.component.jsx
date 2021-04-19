import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from 'components/custom-button';
import { connect } from 'react-redux';
import { cartActions } from 'store/cart';
import { collectionItemTypes } from 'utils/prop-types';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const addItemHandler = (newItem) => addItem(newItem);

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={addItemHandler} type="button" isInverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: collectionItemTypes,
  addItem: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(cartActions.addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
