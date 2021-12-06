import { shallow } from 'enzyme';
import React from 'react';
import Menu from './menu.component';

describe('<Menu/>', () => {
  it('expect to render component', () => {
    const mockSections = [
      {
        title: 'Lorem Ipsum',
        imageUrl: 'http://placehold.com',
        id: 0,
        linkUrl: '/lorem-ipsum',
      },
    ];

    expect(shallow(<Menu sections={mockSections} />)).toMatchSnapshot();
  });
});
