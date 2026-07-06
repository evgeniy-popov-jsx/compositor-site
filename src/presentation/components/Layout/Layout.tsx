import React, { PropsWithChildren } from 'react';
import Div100vh from 'react-div-100vh';
import { Menu } from 'presentation/components/Menu/Menu';
import { Footer } from 'presentation/components/Footer/Footer';
import { Burger } from 'presentation/components/Burger/Burger';
import { Styled } from './styles';

export const LayoutPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Div100vh>
      <Styled.Layout>
        <Styled.Header>
          <Styled.Link to={'/'}>lin korobkova</Styled.Link>
          <Styled.SubLink>composer, philosopher, and text manufacturer</Styled.SubLink>
        </Styled.Header>
        <Styled.Content>{children}</Styled.Content>
        <Footer />
        <Styled.Sider>
          <Styled.Container>
            <Menu />
          </Styled.Container>
        </Styled.Sider>
        <Burger />
      </Styled.Layout>
    </Div100vh>
  );
};
