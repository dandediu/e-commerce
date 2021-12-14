import { shallow } from 'enzyme';
import React from 'react';
import * as reactRedux from 'react-redux';
import CollectionPage from './collection.component';

jest.mock('utils/uid', () => () => '000000000000');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    collectionId: 'hats',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useRouteMatch: () => ({ path: '/dolor/lorem-ipsum/' }),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('<CollectionPage/>', () => {
  const mockStore = {
    shop: {
      collections: {
        hats: {
          id: '00000',
          items: [
            {
              id: 1,
              imageUrl: 'https://placeholder.com/150',
              name: 'Blue Beanie',
              price: 25,
            },
          ],
          routeName: 'hats',
          title: 'Hats',
        },
        jackets: { id: '000', items: [], routeName: 'jackets', title: 'Jackets' },
        sneakers: {
          id: '00',
          items: [],
          routeName: 'sneakers',
          title: 'Sneakers',
        },
      },
    },
  };

  const useSelectorMock = reactRedux.useSelector;

  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('expect to render component', () => {
    const wrapper = shallow(<CollectionPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
