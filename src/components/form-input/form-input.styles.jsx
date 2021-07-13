import styled, { css } from 'styled-components';
import { colors } from 'utils/styles/vars';
import spacing from 'utils/styles/spacing';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${colors.main};
`;

const Group = styled.div`
  position: relative;
`;

const Label = styled.label`
  color: ${colors.neutral};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: calc(${spacing.smSpace} / 2);
  top: ${spacing.smSpace};
  transition: 300ms ease all;

  ${(props) => props.isShrink && shrinkLabelStyles}
`;

const Input = styled.input`
  background: none;
  background-color: ${colors.light};
  color: ${colors.neutral};
  font-size: 18px;
  padding: ${spacing.smSpace} ${spacing.smSpace} ${spacing.smSpace} calc(${spacing.smSpace} / 2);
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colors.neutral};
  margin: ${spacing.lgSpace} 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }

  &[type='password'] {
    letter-spacing: 4px;
  }
`;

export { Group, Label, Input };
