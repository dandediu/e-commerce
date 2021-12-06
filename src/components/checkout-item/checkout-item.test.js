import { shallow } from 'enzyme';
import React from 'react';
import CheckoutItem from './checkout-item.component';

describe('<CheckoutItem/>', () => {
  it('expect to render component', () => {
    const cardProps = {
      imageUrl: 'lorem-ipsum.jpg',
      price: '100',
      name: 'Lorem dolor',
      quantity: 1,
    };
    const addMock = jest.fn();
    const removeMock = jest.fn();
    const clearMock = jest.fn();
    const wrapper = shallow(
      <CheckoutItem
        cardItem={cardProps}
        addItem={addMock}
        removeItem={removeMock}
        clearItem={clearMock}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
