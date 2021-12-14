import { shallow } from 'enzyme';
import React from 'react';
import * as reactRedux from 'react-redux';
import ShopPage from './shop.component';

describe('<ShopPage/>', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  const mockProps = {
    match: {
      path: '/collections',
    },
  };

  it('expect to render component', () => {
    const wrapper = shallow(<ShopPage {...mockProps} />);
    const dummyDispatch = jest.fn();

    useDispatchMock.mockReturnValue(dummyDispatch);

    /* SANITY CHECK */
    expect(dummyDispatch).not.toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
