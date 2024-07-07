import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  
`;
const Link = styled(RLink)`

  &:hover {
    color: var(--color-accent);

    & > * {
      color: var(--color-accent);
    }
  }
`;
const Content = styled.div<{ $active?: boolean }>`
  font-size: 20px;
  color: var(--color-text);

  ${({ $active })=> $active && `
    color: var(--color-accent); 
    text-transform: none;
  `}
`;

export const Styled = {
  Container,
  Link,
  Content,
};