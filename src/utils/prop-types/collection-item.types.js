import { string, shape, number, oneOfType } from 'prop-types';

export default shape({
  id: oneOfType([string, number]),
  name: string,
  price: number,
  imageUrl: string,
});
