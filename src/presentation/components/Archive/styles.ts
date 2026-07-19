import { Link as RLink } from 'react-router-dom';
import { Image as ANTImage } from 'antd';
import styled from 'styled-components';

const Container = styled.div``;

const Link = styled(RLink)`
  text-decoration: none;
  z-index: 1;
  &:hover {
    color: var(--color-accent);

    & > * {
      color: var(--color-accent);
    }
  }
`;
const Content = styled.div<{ $active?: boolean }>`
  font-size: 20px;
  color: var(--color-text);
  text-decoration: none;
  z-index: 2;
  padding: 0 20px;
  ${({ $active }) =>
    $active &&
    `
    color: var(--color-accent);
    text-transform: none;
  `}
`;

const HighlightContent = styled.div`
  padding: 50px 0px 20px;
  color: white;

  & > * {
    color: white;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Photo = styled(ANTImage)`
  width: 100%;
  height: auto;
  max-height: 400px;
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
