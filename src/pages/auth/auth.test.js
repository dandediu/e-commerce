import { shallow } from 'enzyme';
import React from 'react';
import AuthPage from './auth.component';

describe('<AuthPage/>', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<AuthPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
