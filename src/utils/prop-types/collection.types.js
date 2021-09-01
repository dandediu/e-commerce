import { string, shape, number, arrayOf, oneOfType } from 'prop-types';
import { collectionItemTypes } from 'utils/prop-types';

export default shape({
  id: oneOfType([string, number]),
  title: string,
  routeName: string,
  items: arrayOf(collectionItemTypes),
});
