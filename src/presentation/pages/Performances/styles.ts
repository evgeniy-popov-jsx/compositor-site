import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Filter = styled.div`
  display: flex;
  gap: 100px;
  padding-left: 20px;
  padding-top: 130px;
  @media (max-width: 670px) {
    top: 100px;
  }
`;

const Button = styled.button<{ $active: true | false }>`
  font-size: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-text);
  transition: color 1s ease-in forwards;

  &:hover {
    color: var(--color-accent);
  }

  ${({ $active }) =>
    $active &&
    `
    color: var(--color-accent);
  `}
`;
const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
`;

export const Styled = {
  Link,
  Filter,
  Button,
};
