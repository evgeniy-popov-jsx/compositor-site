import { Image as ANTImage } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ant-image-preview-mask {
    background-color: rgba(240, 241, 235, 0.2) !important;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  margin-top: -180px;

  @media (max-width: 900px) {
    margin-top: 0px;
  }
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: auto;
  object-position: center top;
  object-fit: cover;
  filter: grayscale(100%);
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(50%);
  }
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
  font-size: 16px;
  line-height: 1.6;
  text-transform: lowercase;
`;

const Quote = styled.blockquote`
  font-size: clamp(24px, 4vw, 55px);
  line-height: 1.1;
  color: var(--color-accent);
  font-weight: 500;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25%;
  z-index: 2;

  @media (max-width: 900px) {
    margin-left: 15%;
    max-width: 500px;
  }

  @media (max-width: 670px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const CvLink = styled.a`
  display: inline-block;
  font-size: 16px;
  color: var(--color-text);
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Styled = {
  GlobalStyle,
  PhotoWrapper,
  Image,
  Paragraph,
  Quote,
  CvLink,
};
