import React from 'react';
import { Styled } from './styles';

type ContentWrapperProps = {
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'audio';
  customPadding?: string;
};

export const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>((props, ref) => {
  const { children, position, customPadding } = props;

  return (
    <Styled.Container $position={position} $customPadding={customPadding} ref={ref}>
      {children}
    </Styled.Container>
  );
});