import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionsContainerStyles = css`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${optionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${optionsContainerStyles}
`;
