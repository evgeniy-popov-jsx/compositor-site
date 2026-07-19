import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  max-width: 550px;
`;
const Link = styled(RLink)``;
const Content = styled.div<{ $active?: boolean }>`
  font-size: 20px;
  text-decoration: none;
  color: var(--color-text);
  ${({ $active }) =>
    $active &&
    `
    color: var(--color-accent); 
  `}
`;

export const Styled = {
  Container,
  Link,
  Content,
};
