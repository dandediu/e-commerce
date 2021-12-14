import { shallow } from 'enzyme';
import React from 'react';

import HomePage from './home.component';

describe('<HomePage/>', () => {
  const mockProps = {
    match: {
      path: '/collections',
    },
  };

  it('expect to render component', () => {
    const wrapper = shallow(<HomePage {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
