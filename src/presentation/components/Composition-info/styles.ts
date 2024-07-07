import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Link = styled(RLink)`
  
`;
const Content = styled.div`
  font-size: 20px;
  color: var(--color-text);

  &:nth-child(1){
    color: var(--color-accent);
  }
`;
export const Styled = {
  Container,
  Link,
  Content,
};