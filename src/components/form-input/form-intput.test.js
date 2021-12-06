import { shallow } from 'enzyme';
import React from 'react';
import FormInput from './form-input.component';

describe('<FormInput/>', () => {
  const mockProps = {
    id: 'loremIpsum',
    handleChange: jest.fn(),
  };

  it('expect to render component', () => {
    const wrapper = shallow(<FormInput {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render input component with label', () => {
    const props = {
      id: 'loremIpsum',
      handleChange: jest.fn(),
      label: 'Lorem Ipsum',
      value: '',
    };
    const wrapper = shallow(<FormInput {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
