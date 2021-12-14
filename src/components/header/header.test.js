import { shallow } from 'enzyme';
import React from 'react';
import Header from './header.component';

describe('<Header/>', () => {
  const mockProps = {
    currentUser: {},
    hidden: true,
    onSingOut: jest.fn(),
  };

  it('expect to render component', () => {
    const wrapper = shallow(<Header {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
