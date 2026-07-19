import styled from 'styled-components';

const HighlightWrapper = styled.div`
  position: relative;
  background-color: var(--color-accent);
  color: white;
`;

const DecorBefore = styled.div`
  height: 125px;
  background-image: url('/decorElemenBefore.svg');
  background-repeat: no-repeat;
  background-position: center -44px;
  background-size: 550px;
  overflow: hidden;
`;

const DecorAfter = styled.div`
  height: 130px;
  background-image: url('/decorElemenAfter.svg');
  background-repeat: no-repeat;
  background-position: center -3px;
  background-size: 550px;
  overflow: hidden;
`;

export const Styled = {
  HighlightWrapper,
  DecorBefore,
  DecorAfter,
};
