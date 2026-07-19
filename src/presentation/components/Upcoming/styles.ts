import { Link as RLink } from 'react-router-dom';
import { Image as ANTImage } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  max-width: 540px;
  font-family: 'Syne';
`;
const Link = styled(RLink)`
  position: relative;
  z-index: 1;
  text-decoration: none;
  &:hover {
    color: var(--color-accent);

    & > * {
      color: var(--color-accent);
    }
  }
`;
const Content = styled.div<{ $active?: boolean }>`
  position: relative;
  z-index: 1;
  font-size: 20px;
  padding-left: 20px;
  color: var(--color-text);
  text-decoration: none;
  ${({ $active }) =>
    $active &&
    `
    color: var(--color-accent);
  `}
`;

const HighlightContent = styled.div`
  padding: 20px 0;
  color: white;

  & > * {
    color: white;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
`;

const Photo = styled(ANTImage)`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    filter: brightness(70%);
  }
`;

export const Styled = {
  Container,
  Link,
  Content,
  HighlightContent,
  PhotoWrapper,
  Photo,
};
