import { shape, string, number, oneOfType } from 'prop-types';

export default shape({
  imageUrl: string,
  price: oneOfType([string, number]),
  name: string,
  quantity: number,
});
