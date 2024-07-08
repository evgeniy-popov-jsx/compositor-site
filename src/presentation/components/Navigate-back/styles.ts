import { Link as RLink} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 145px;
  left: 20px;

  @media (max-width: 670px) {
    top: 100px;
  }
`;
const Link = styled(RLink)`
  font-size: 20px;
  color: var(--color-text);
`;

export const Styled = {
  Container,
  Link,
};