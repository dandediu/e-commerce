import { shallow } from 'enzyme';
import React from 'react';
import CollectionCard from './collection-card.component';

describe('<CollectionCard/>', () => {
  it('expect to render component', () => {
    const item = {
      id: 0,
      name: 'Lorem dolor',
      price: '100',
      imageUrl: 'lorem-ipsum.jpg',
    };
    const addMock = jest.fn();

    const wrapper = shallow(<CollectionCard item={item} addItem={addMock} />);

    expect(wrapper).toMatchSnapshot();
  });
});
