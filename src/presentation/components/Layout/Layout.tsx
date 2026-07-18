import React from 'react';
import Div100vh from 'react-div-100vh';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'presentation/components/Menu/Menu';
import { Footer } from 'presentation/components/Footer/Footer';
import { Burger } from 'presentation/components/Burger/Burger';
import { Styled } from './styles';

export const LayoutPage: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <Div100vh>
      <Styled.Layout>
        <Styled.Header>
          <Styled.Link to={'/'}>lin korobkova</Styled.Link>
          <Styled.SubLink>composer, philosopher, and text manufacturer</Styled.SubLink>
        </Styled.Header>
        <Styled.Content>
          {isHome ? (
            <Styled.NoteSlider>
              <Styled.NoteTrack>
                <Styled.NoteImageWrap>
                  <Styled.NoteImage src='/mainNote.png' alt='musical notes' />
                </Styled.NoteImageWrap>
                <Styled.NoteImageWrap>
                  <Styled.NoteImage src='/mainNote.png' alt='musical notes' />
                </Styled.NoteImageWrap>
              </Styled.NoteTrack>
            </Styled.NoteSlider>
          ) : (
            <Outlet />
          )}
        </Styled.Content>
        <Footer />
        <Menu />
        <Burger />
      </Styled.Layout>
    </Div100vh>
  );
};
