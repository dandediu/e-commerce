import { shallow } from 'enzyme';
import React from 'react';
import CustomButton from './custom-button.component';

describe('<CustomButton/>', () => {
  const mockProps = {
    children: 'Lorem Ipsum',
    type: 'button',
  };

  it('expect to render component', () => {
    const cardIconWrapper = shallow(<CustomButton {...mockProps} />);

    expect(cardIconWrapper).toMatchSnapshot();
  });

  it('test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(
      <CustomButton id="testButton" type="button" onClick={mockCallBack}>
        Lorem Ipsum
      </CustomButton>,
    );

    button.find('[id="testButton"]').simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
