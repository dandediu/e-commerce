import { string, shape, number, arrayOf } from 'prop-types';
import { collectionItemTypes } from 'utils/prop-types';

export default shape({
  id: number,
  title: string,
  routeName: string,
  items: arrayOf(collectionItemTypes),
});
