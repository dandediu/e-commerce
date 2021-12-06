import { shallow } from 'enzyme';
import React from 'react';
import StripeButton from './stripe-button.component';

describe('<StripeButton/>', () => {
  it('expect to render component', () => {
    const mockProps = {
      price: 0,
    };

    const wrapper = shallow(<StripeButton {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
