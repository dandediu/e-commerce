import styled, { css } from 'styled-components';
import spacing from 'utils/styles/spacing';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

export const ErrorInner = styled.div`
  padding: ${spacing.space};
  font-size: 14px;
  color: #d63031;
  width: 600px;
`;

export const SeeMoreLabel = styled.div`
  padding: ${spacing.space};
  font-size: 18px;
  color: #2f8e89;
  cursor: pointer;
`;

const initialArrow = css`
  transform: rotate(180deg);
  padding-right: calc(${spacing.xsSpace} / 2);
`;

const rotatedArrow = css`
  padding-left: calc(${spacing.xsSpace} / 2);
  transform: rotate(0deg);
`;

export const Arrow = styled.span`
  display: inline-block;
  font-size: 14px;
  transition: 400ms linear all;
  ${(props) => (props.isInverted ? rotatedArrow : initialArrow)};
`;
