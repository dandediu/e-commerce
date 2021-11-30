import { shallow } from 'enzyme';
import React from 'react';
import CollectionOverview from './collection-overview.component';

jest.mock('utils/uid', () => () => '000000000000');

describe('<CollectionOverview/>', () => {
  it('expect to render component', () => {
    const mockCollectionOverview = [
      {
        id: 1,
        title: 'Lorem Ipsum',
        routeName: '/lorem-ipsum',
        items: [
          {
            id: 1,
            name: 'Sed lectus',
            price: 200,
            imageUrl: 'http://placehold.com',
          },
        ],
      },
    ];
    const wrapper = shallow(<CollectionOverview collections={mockCollectionOverview} />);

    expect(wrapper).toMatchSnapshot();
  });
});
