import { shallow } from 'enzyme';
import React from 'react';
import * as reactRedux from 'react-redux';
import CheckoutPage from './checkout.component';

jest.mock('utils/uid', () => () => '000000000000');

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('<CheckoutPage/>', () => {
  const mockStore = {
    cart: {
      cartItems: [
        {
          id: 3,
          imageUrl: 'http://placeholder.com/150',
          name: 'Phasellus consectetuer vestibulum elit.',
          price: 100,
          quantity: 1,
        },
      ],
    },
  };

  const useSelectorMock = reactRedux.useSelector;

  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('expect to render component', () => {
    const wrapper = shallow(<CheckoutPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
