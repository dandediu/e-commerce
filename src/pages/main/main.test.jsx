import { shallow } from 'enzyme';
import React from 'react';

import MainPage from './main.component';

describe('<MainPage/>', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<MainPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
