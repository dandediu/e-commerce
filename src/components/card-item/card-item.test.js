import { shallow } from 'enzyme';
import React from 'react';
import CardItem from './card-item.component';

describe('<CardItem/>', () => {
  it('expect to render component', () => {
    const cardProps = {
      imageUrl: 'lorem-ipsum.jpg',
      price: '100',
      name: 'Lorem dolor',
      quantity: '1',
    };

    expect(shallow(<CardItem cardItem={cardProps} />)).toMatchSnapshot();
  });
});
