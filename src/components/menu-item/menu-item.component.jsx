import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItemWrapper, BackgroundImage, Content, Title, SubTitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, isLarge, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const onClickHandler = () => history.push(`${match.url}${linkUrl}`);

  return (
    <MenuItemWrapper isLarge={isLarge} onClick={onClickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <SubTitle className="subtitle">Shop Now</SubTitle>
      </Content>
    </MenuItemWrapper>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  isLarge: PropTypes.bool,
  linkUrl: PropTypes.string,
};

export default MenuItem;
