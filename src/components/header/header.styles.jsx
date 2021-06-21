import styled, { css } from 'styled-components';
import breakpoints from 'utils/breakpoints';
import { Link } from 'react-router-dom';

const optionCommonStyles = css`
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.laptop} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
  margin: 15px 0;

  &:hover {
    opacity: 0.9;
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Option = styled.li`
  &:not(:last-child) {
  }
`;

export const OptionLink = styled(Link)`
  ${optionCommonStyles}
`;

export const OptionDiv = styled.div`
  ${optionCommonStyles}
`;
