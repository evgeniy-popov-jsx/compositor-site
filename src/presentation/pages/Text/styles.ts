import { Image as ANTImage } from 'antd';
import { Link as RLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ant-image-preview-mask {
    background-color: rgba(240, 241, 235, 0.2) !important;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
`;

const Paragraph = styled.p`
  text-align: left;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  orphans: 3;
  widows: 3;
  max-width: 550px;
  font-size: 21px;
  line-height: 1.6;
`;

const Date = styled.p`
  margin: 5px 0 0 0;
  font-size: 20px;
  color: var(--color-text);
`;

const Title = styled.div`
  color: var(--color-accent);
  max-width: 550px;
  font-size: 20px;
`;

const PhotoWrapper = styled.div<{ $align?: 'left' | 'right' }>`
  max-width: 550px;
  margin-top: 10px;
  margin-bottom: 10px;

  ${({ $align }) =>
    $align === 'right' &&
    `
    margin-left: 25%;
  `}
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(70%);
  }
`;

const Quote = styled.blockquote`
  font-size: clamp(24px, 4vw, 55px);
  line-height: 1;
  color: var(--color-accent);
  font-weight: 600;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25%;
  z-index: 2;

  @media (max-width: 900px) {
    margin-left: 15%;
    padding-left: 65px;
    max-width: 500px;
    font-size: 40px;
  }

  @media (max-width: 670px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const Styled = {
  GlobalStyle,
  Link,
  Paragraph,
  Title,
  Date,
  PhotoWrapper,
  Image,
  Quote,
};
