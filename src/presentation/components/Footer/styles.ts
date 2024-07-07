import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  padding-bottom: 20px;
  padding-right: 30px;
`;
const Link = styled(RLink)`
  font-size: 20px;
  color: var(--color-text);
  
  &:hover {
    color: var(--color-accent);
  }
`;

export const Styled = {
  Container,
  Link,
};