import { shallow } from 'enzyme';
import React from 'react';
import CardIcon from './cart-icon.component';

describe('<CardItem/>', () => {
  const mockProps = {
    itemCount: 1,
    onToggle: jest.fn(),
  };

  it('expect to render component', () => {
    const cardIconWrapper = shallow(<CardIcon {...mockProps} />);

    expect(cardIconWrapper).toMatchSnapshot();
  });
});
