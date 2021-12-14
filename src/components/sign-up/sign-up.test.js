import { shallow } from 'enzyme';
import React from 'react';
import SignUp from './sign-up.component';

describe('<SignUp/>', () => {
  const mockProps = {
    onSubmit: jest.fn(),
  };

  it('expect to render component', () => {
    const wrapper = shallow(<SignUp {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('test click event', () => {});
});
