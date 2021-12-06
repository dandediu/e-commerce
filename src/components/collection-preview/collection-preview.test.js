import { shallow } from 'enzyme';
import React from 'react';
import CollectionPreview from './collection-preview.component';

jest.mock('utils/uid', () => () => '000000000000');

describe('<CollectionPreview/>', () => {
  it('expect to render component', () => {
    const mockProps = {
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
    };

    const wrapper = shallow(<CollectionPreview {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
