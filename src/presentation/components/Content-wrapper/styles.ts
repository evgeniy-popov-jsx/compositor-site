import styled from 'styled-components';

const Container = styled.div<{$position: 'top' | 'bottom' | 'audio'}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 30px 20px 20px 20px;
  background: var(--color-background);
  overflow-y: auto;

  ${({ $position }) => $position === 'bottom' && `
    gap: 40px;
    justify-content: flex-end;
  `}
  ${({ $position }) => $position === 'audio' && `
    padding-bottom: 130px;
  `}

  scrollbar-width: none;
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    pointer-events: none;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 540px) {
    gap: 20px;
    max-width: 100%;
  }
  @media (max-height: 540px) {
    justify-content: flex-start;
  }
`;

export const Styled = {
  Container
};