import { NavLink as RLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Burger = styled.div`
  position: fixed;
  display: none;
  background-color: transparent;
  z-index: 2;
  width: 100%;
  height: 30px;
  top: 10px;
  left: 0px;

  @media (max-width: 670px) {
    display: block;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 10px;
  height: 100vh;
  padding: 20px 0px;
  flex-direction: column;
  align-items: end;
  overflow: hidden;
  pointer-events: none;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: 2;
`;
const Button = styled.button`
  margin-right: 20px;
  width: 31px;
  height: 34px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  z-index: 3
`;
const Line = styled.div<{ $isChecked: boolean; $position: 'top' | 'middle' | 'bottom'; }>`
  width: 100%;
  height: 2px;
  background: black;
  position: absolute;
  transition-duration: 0.35s;

  ${({ $position }) => $position === 'top' && `
    bottom: calc(50% + 11px + 4px / 2);
    transition-property: bottom, transform;
    transition-delay: calc(0s + 0.35s), 0s;
  `}

  ${({ $position }) => $position === 'middle' && `
    top: calc(50% - 12px / 2);
    transition-property: opacity;
    transition-delay: calc(0s + 0.35s);
  `}

  ${({ $position }) => $position === 'bottom' && `
    top: calc(50% + 2px + 4px / 2);
    transition-property: top, transform;
    transition-delay: calc(0s + 0.35s), 0s;
  `}

  ${({ $isChecked, $position }) => $isChecked && $position === 'top' && `
    bottom: calc(50% + 8px / 2);
    transform: rotate(135deg);
    transition-delay: 0s, calc(0s + 0.35s);
  `}

  ${({ $isChecked, $position }) => $isChecked && $position === 'middle' && `
    opacity: 0;
    transition-duration: 0s;
    transition-delay: calc(0s + 0.1s);
  `}

  ${({ $isChecked, $position }) => $isChecked && $position === 'bottom' && `
    top: calc(50% - 12px / 2);
    transform: rotate(225deg);
    transition-delay: 0s, calc(0s + 0.35s);
  `}
`;
const Link = styled(RLink)<{ $isActive?: boolean }>`
  position: relative;
  color: var(--color-text);
  pointer-events: auto;
  font-size: 20px;

  ${({ $isActive })=> $isActive && `
    color: var(--color-accent);

    &::before {
      position: absolute;
      content: '';
      display: inline-block;
      width: 7px;
      height: 7px;
      background-color: var(--color-accent);
      border-radius: 50%;
      left: -10px;
      top: 55%;
      transform: translateY(-50%);
    }
  `}
  &:hover {
    color: var(--color-accent);
  }
`;

const Menu = styled.div<{ $isChecked: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 20px;
  padding-left: 10px;
  gap: 20px;

  ${Link} {
    transition: transform 0.3s ease;
  }
  ${Link}:nth-child(1) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.1s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(160%)'};
  }
  ${Link}:nth-child(2) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.2s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(160%)'};
  }
  ${Link}:nth-child(3) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.3s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(160%)'};
  }
  ${Link}:nth-child(4) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.4s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(160%)'};
  }
  ${Link}:nth-child(5) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.5s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(160%)'};
  }
`;
const Footer = styled.div<{ $isChecked: boolean}>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 20px;
  gap: 20px;

  ${Link} {
    transition: transform 0.3s ease;
  }
  ${Link}:nth-child(1) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.3s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(150%)'};
  }
  ${Link}:nth-child(2) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.2s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(150%)'};
  }
  ${Link}:nth-child(3) {
    transition-delay: ${({ $isChecked }) => $isChecked ? '0.1s' : '0s'};
    transform: ${({ $isChecked }) => $isChecked ? 'none' : 'translateX(150%)'};
  }

  &:hover {
    color: var(--color-accent);
  }
`;

const blurIn = keyframes`
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(5px);
  }
`;
const blurOut = keyframes`
  from {
    backdrop-filter: blur(5px);
  }
  to {
    backdrop-filter: blur(0px);
  }
`;
const Blur= styled.div<{ $isChecked: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $isChecked }) => $isChecked ? 'rgba(240, 241, 235, 0.5)' : ''};
  animation: ${({ $isChecked }) => $isChecked ? blurIn : blurOut} 0.5s forwards;
  z-index: 1;
  pointer-events: ${({ $isChecked }) => $isChecked ? 'auto' : 'none'};
`;

export const Styled = {
  Burger,
  Container,
  Button,
  Wrapper,
  Line,
  Menu,
  Footer,
  Link,
  Blur
};