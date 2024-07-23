
import { Link as RLink} from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
`;
const Paragraph = styled.p`
  text-align: justify;
  hyphens: auto;
  word-wrap: break-word;
  max-width: 550px;
  font-size: 20px;
`;
const Date = styled.p`
  margin: 5px 0 0 0;
  font-size: 20px;
  color: var(--color-text);
`;
const Title = styled.div`
  color: var(--color-accent);
  max-width: 550px;
  font-size: 20px;
`;
export const Styled = {
  Link,
  Paragraph,
  Title,
  Date
};