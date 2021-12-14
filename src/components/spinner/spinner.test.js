import { shallow } from 'enzyme';
import React from 'react';
import Spinner from './spinner.component';

describe('<Spinner/>', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
  });
});
