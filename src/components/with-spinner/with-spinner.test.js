import { shallow } from 'enzyme';
import React from 'react';
import WithSpinner from './with-spinner.component';

const MockComponent = () => <div>Lorem Ipsum</div>;

const WithSpinnerComponent = WithSpinner(MockComponent);

describe('WithSpinner(<MockComponent/>)', () => {
  const mockProps = {
    isLoading: true,
  };

  it('expect to render component', () => {
    const wrapper = shallow(<WithSpinnerComponent {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the <Spinner/> only when the condition passes', () => {
    const wrapper = shallow(<WithSpinnerComponent isLoading />);

    expect(wrapper.html()).not.toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <MockComponent/> when the condition fails', () => {
    const wrapper = shallow(<WithSpinnerComponent isLoading={false} />);

    expect(wrapper.html()).not.toBe(null);
    expect(wrapper).toMatchSnapshot();
  });
});
