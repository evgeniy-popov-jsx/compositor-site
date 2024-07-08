import React, { PropsWithChildren } from 'react';
import { use100vh } from 'react-div-100vh'
import Div100vh from 'react-div-100vh'
import { Layout } from 'antd';
import { Menu } from 'presentation/components/Menu/Menu';
import { Footer } from 'presentation/components/Footer/Footer';
import { Burger } from 'presentation/components/Burger/Burger';
import { Styled } from './styles';

export const LayoutPage: React.FC<PropsWithChildren> = ({ children }) => {
  const height = use100vh();
  const halfHeight = height ? height / 2 : '50vh';

  return (
    <Div100vh>
      <Styled.Layout>
        <Layout>
          <Styled.Header>
            <Styled.Link to={'/'}>polina korobkova</Styled.Link>
          </Styled.Header>
          <Styled.Content style={{ height: halfHeight }}>{children}</Styled.Content>
        </Layout>
        <Styled.Sider width="200px">
          <Styled.Container>
            <Menu />
            <Footer />
          </Styled.Container>
        </Styled.Sider>
        <Burger />
      </Styled.Layout>
    </Div100vh>
  );
};
