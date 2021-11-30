import { shallow } from 'enzyme';
import React from 'react';
import DropdownList from './dropdown-list.component';

jest.mock('utils/uid', () => () => '000000000000');
describe('<DropdownList/>', () => {
  it('expect to render component', () => {
    const cardProps = [
      {
        imageUrl: 'lorem-ipsum.jpg',
        price: '100',
        name: 'Lorem dolor',
        quantity: 1,
      },
    ];

    expect(shallow(<DropdownList cardItems={cardProps} />)).toMatchSnapshot();
  });
});
