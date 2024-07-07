import { Link as RLink} from 'react-router-dom';
import styled from 'styled-components';

const Filter = styled.div`
  position: fixed;
  display: flex;
  gap: 40px;
  top: 145px;
  left: 20px;
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

  ${({ $active }) => $active  && `
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
  Button
};