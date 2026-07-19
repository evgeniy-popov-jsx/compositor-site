import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 650px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 22px 0;
  border-bottom: 1px solid var(--color-accent);
  gap: 20px;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  font-family: 'Syne Mono', monospace;
  font-size: 21px;
  color: var(--color-accent);
  white-space: nowrap;
`;

const Value = styled.span`
  font-size: 21px;
  color: var(--color-text);
  text-align: right;
  font-family: 'Syne Mono', monospace;
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-size: 24px;
  color: var(--color-text);
  text-decoration: none;
  margin-top: 15px;
`;

export const Styled = {
  Container,
  Row,
  Label,
  Value,
  ProjectLink,
};
