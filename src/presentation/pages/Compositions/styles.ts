import { Link as RLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const drawLine = keyframes`
  from {
    stroke-dashoffset: 100%;
  }
  to {
    stroke-dashoffset: 0%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Link = styled(RLink)`
  width: fit-content;
  font-size: 20px;
  text-transform: none;
  text-decoration: none;
  line-height: 20px;
  color: var(--color-text);

  &:hover {
    color: var(--color-accent);

    + .animation .line {
      transform: translateX(0%);
      transition: transform 0.5s ease;
    }

    + .animation .line_diagonal {
      animation: ${drawLine} 10s ease-out forwards;
      animation-delay: 250ms;
    }

    + .animation svg .circle {
      animation: ${fadeIn} 1s ease forwards;
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100% !important;
  gap: 10px;

  @media (max-width: 1000px) {
    width: 100% !important;
  }
`;

const Animation = styled.div`
  position: relative;
  flex-grow: 1;

  svg {
    position: absolute;
    top: 0;
    right: 0;
  }

  .line {
    transform: translateX(-100%);
  }

  .line_diagonal {
    stroke-dasharray: 100%;
  }

  .circle {
    opacity: 0;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const Line = styled.line``;

const LineDiagonal = styled(Line)`
  stroke-width: 1px;
  stroke: #164dc4;
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
`;

const Circle = styled.circle`
  fill: #164dc4;
`;

export const Styled = {
  Link,
  ListItem,
  Animation,
  Line,
  LineDiagonal,
  Circle,
};
