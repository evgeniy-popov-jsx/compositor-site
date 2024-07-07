import { Link as RLink} from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
  color: var(--color-text);

  &:hover {
    color: var(--color-accent);
  }
`;

export const Styled = {
  Link
};