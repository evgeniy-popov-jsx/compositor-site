import React from 'react';
import { Styled } from './styles';

interface HighlightBlockProps {
  children: React.ReactNode;
}

export const HighlightBlock: React.FC<HighlightBlockProps> = ({ children }) => {
  return (
    <>
      <Styled.DecorBefore />
      <Styled.HighlightWrapper>
        {children}
      </Styled.HighlightWrapper>
      <Styled.DecorAfter />
    </>
  );
};
