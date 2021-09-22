import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { shopSelectors } from 'store/shop';
import WithSpinner from 'components/with-spinner';
import Collection from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !shopSelectors.selectIsCollectionLoaded(state),
});

const CollectionPage = compose(connect(mapStateToProps), WithSpinner)(Collection);

export default CollectionPage;
