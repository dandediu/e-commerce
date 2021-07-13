import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { MenuItemWrapper, BackgroundImage, Content, Title, SubTitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, isLarge, linkUrl, history, match }) => (
  <MenuItemWrapper isLarge={isLarge} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title}</Title>
      <SubTitle className="subtitle">Shop Now</SubTitle>
    </Content>
  </MenuItemWrapper>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  isLarge: PropTypes.bool,
  linkUrl: PropTypes.string,
  history: PropTypes.shape({ push: PropTypes.func }),
  match: PropTypes.shape({ url: PropTypes.string }),
};

export default withRouter(MenuItem);
