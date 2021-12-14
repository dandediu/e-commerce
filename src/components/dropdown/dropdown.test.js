import { shallow } from 'enzyme';
import React from 'react';
import DropDown from './dropdown.component';

describe('<DropDown/>', () => {
  const mockProps = {
    cardItems: [
      {
        imageUrl: 'lorem-ipsum.jpg',
        price: '100',
        name: 'Lorem dolor',
        quantity: 1,
      },
    ],
    onClose: jest.fn(),
    onClickCheckout: jest.fn(),
  };

  it('expect to render component', () => {
    const cardIconWrapper = shallow(<DropDown {...mockProps} />);

    expect(cardIconWrapper).toMatchSnapshot();
  });
});
