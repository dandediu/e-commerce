import { shallow } from 'enzyme';
import React from 'react';
import MenuItem from './menu-item.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({ url: '/lorem-ipsum' }),
}));

describe('<MenuItem/>', () => {
  it('expect to render component', () => {
    const mockSections = {
      title: 'Lorem Ipsum',
      imageUrl: 'http://placehold.com',
      id: 0,
      linkUrl: '/lorem-ipsum',
      isLarge: true,
    };

    expect(shallow(<MenuItem sections={mockSections} />)).toMatchSnapshot();
  });
});
