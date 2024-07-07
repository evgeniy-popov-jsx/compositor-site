import React, { PropsWithChildren } from 'react';
import { Styled } from './styles';
import { Layout } from 'antd';
import { Menu } from 'presentation/components/Menu/Menu';
import { Footer } from 'presentation/components/Footer/Footer';
import { Burger } from 'presentation/components/Burger/Burger';

export const LayoutPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.Layout>
      <Layout>
        <Styled.Header>
          <Styled.Link to={'/'}>polina korobkova</Styled.Link>
        </Styled.Header>
        <Styled.Content>{children}</Styled.Content>
      </Layout>
      <Styled.Sider width="200px">
        <Styled.Container>
          <Menu />
          <Footer />
        </Styled.Container>
      </Styled.Sider>
      <Burger />
    </Styled.Layout>
  );
};
