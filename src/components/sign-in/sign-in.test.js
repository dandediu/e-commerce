import { shallow } from 'enzyme';
import React from 'react';
import SignIn from './sign-in.component';

describe('<SignIn/>', () => {
  const mockProps = {
    onClickGoogleSignIn: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('expect to render component', () => {
    const cardIconWrapper = shallow(<SignIn {...mockProps} />);

    expect(cardIconWrapper).toMatchSnapshot();
  });

  it('test click event', () => {});
});
