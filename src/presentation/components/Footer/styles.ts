import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-top: 20px;
  font-family: 'Syne Mono', monospace;
  @media (max-width: 670px) {
    grid-column: 1;
  }
`;

const Blocks = styled.div`
  font-family: 'Syne Mono', monospace;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 100%;
  padding: 30px 30px 0 30px;
  border-top: 1px solid var(--color-accent);

  :nth-child(1) {
    max-width: 400px;
  }
  :nth-child(2) {
    max-width: 500px;
  }

  & > *:nth-child(3) {
    padding-left: 150px;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px 20px 0 20px;

    & > *:nth-child(3) {
      padding-left: 0;
    }
  }
`;

const Block = styled.div`
  font-family: 'Syne Mono', monospace;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BlockTitle = styled.div`
  font-family: 'Syne Mono', monospace;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const BlockLink = styled(RLink)`
  font-family: 'Syne Mono', monospace;
  font-size: 16px;
  color: var(--color-accent);
  text-decoration: none;

  &:hover {
    color: var(--color-accent);
  }
`;

const BlockText = styled.p`
  font-family: 'Syne Mono', monospace;
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.5;
  margin: 0;
`;

export const Styled = {
  Wrapper,
  Blocks,
  Block,
  BlockTitle,
  BlockText,
  BlockLink,
};
