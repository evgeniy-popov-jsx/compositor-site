import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 130px;
  @media (max-width: 670px) {
    top: 100px;
  }
`;
const Link = styled(RLink)`
  font-size: 20px;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-accent);
  }
`;

export const Styled = {
  Container,
  Link,
};
