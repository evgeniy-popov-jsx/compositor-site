import React from 'react';
import { Styled } from './styles';

type ContentWrapperProps = {
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'audio';
};

export const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>((props, ref) => {
  const { children, position } = props;

  return (
    <Styled.Container $position={position} ref={ref}>
      {children}
    </Styled.Container>
  );
});