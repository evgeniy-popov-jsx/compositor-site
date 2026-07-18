import React from 'react';
import { Styled } from './styles';

interface HighlightProps {
  children: React.ReactNode;
}

export const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
