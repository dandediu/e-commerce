import { shallow } from 'enzyme';
import React from 'react';
import Footer from './footer.component';

describe('<Footer/>', () => {
  it('expect to render component', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
