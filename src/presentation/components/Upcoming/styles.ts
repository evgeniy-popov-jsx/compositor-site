import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
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
  `}
`;

export const Styled = {
  Container,
  Link,
  Content,
};