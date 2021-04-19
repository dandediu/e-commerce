import { shape, string, number } from 'prop-types';

export default shape({
  imageUrl: string,
  price: number,
  name: string,
  quantity: number,
});
