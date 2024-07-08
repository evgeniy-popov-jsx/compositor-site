import { Layout as ANTLayout } from 'antd';
import { Link as RLink} from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled(ANTLayout)`
  position: relative;
  min-height: 100%;
  background-color: var(--color-background);
  overflow: hidden;
`;
const Header = styled(ANTLayout.Header)`
  height: 200px;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 20px;
  background-color: var(--color-background);

  @media (max-width: 670px) {
    height: 130px;
  }
`;
const Content = styled(ANTLayout.Content)`
  background-color: var(--color-background);
`;
const Sider = styled(ANTLayout.Sider)`
  background-color: var(--color-background) !important;

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
  color: var(--color-text);

  &:hover {
    color: var(--color-accent);
  }
`;
export const Styled = {
  Layout,
  Header,
  Content,
  Sider,
  Container,
  Link
};