import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { shopSelectors } from 'store/shop';
import WithSpinner from 'components/with-spinner';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: shopSelectors.selectIsCollectionFetching,
  collections: shopSelectors.selectCollectionForPreview,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);

export default CollectionOverviewContainer;
