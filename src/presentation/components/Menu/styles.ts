import { NavLink as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 30px;
  padding-right: 30px;
  flex-direction: column;
  align-items: end;
`;
const Link = styled(RLink)<{ $isActive: boolean }>`
  position: relative;
  font-size: 20px;
  color: var(--color-text);

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

export const Styled = {
  Container,
  Link,
};