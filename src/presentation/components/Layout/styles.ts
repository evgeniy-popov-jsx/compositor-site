import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
  background-color: var(--color-background);
  overflow: hidden;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
const Header = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  height: 100px;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 20px;
  background-color: var(--color-background);

  @media (max-width: 670px) {
    height: 130px;
  }
`;
const Content = styled.div`
  grid-column: 1;
  grid-row: 2;
  background-color: var(--color-background);

  @media (max-width: 670px) {
    grid-column: 1;
  }
`;
const Sider = styled.div`
  grid-column: 2;
  grid-row: 1;
  grid-row-end: 3;
  background-color: var(--color-background);

  @media (max-width: 670px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
const Link = styled(RLink)`
  color: var(--color-accent);
  font-size: 30px;
  height: min-content;
  margin-bottom: 5px;
  text-decoration: none;
  &:hover {
    color: var(--color-accent);
  }
`;

const SubLink = styled.div`
  font-size: 20px;
  line-height: 25px;
`;

export const Styled = {
  Layout,
  Header,
  Content,
  Sider,
  Container,
  Link,
  SubLink,
};
