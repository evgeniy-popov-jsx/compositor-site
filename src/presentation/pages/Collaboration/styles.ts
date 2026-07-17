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
`;

const PhotoOffset = styled.div`
  width: 100%;
  max-width: 550px;
  margin-left: 25%;

  @media (max-width: 900px) {
    margin-left: 15%;
    max-width: 500px;
  }

  @media (max-width: 670px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: auto;
  object-position: center top;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(70%);
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
  line-height: 1.2;
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

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 700px;
  margin-top: 20px;
`;

const ContactLabel = styled.span`
  font-size: clamp(24px, 4vw, 55px);
  line-height: 1.2;
  color: var(--color-accent);
  font-weight: 500;
`;

const ContactLink = styled.a`
  font-size: clamp(24px, 4vw, 55px);
  line-height: 1.2;
  color: var(--color-text);
  font-weight: 500;
  text-decoration: underline;
  word-break: break-all;
  color: var(--color-accent);
  text-decoration: none;
`;

const Highlight = styled.p`
  font-size: clamp(16px, 2.5vw, 24px);
  line-height: 1.4;
  color: var(--color-text);
  font-weight: 700;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25%;

  @media (max-width: 900px) {
    margin-left: 15%;
    max-width: 500px;
  }

  @media (max-width: 670px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const Styled = {
  GlobalStyle,
  PhotoWrapper,
  PhotoOffset,
  Image,
  Paragraph,
  Quote,
  ContactWrapper,
  ContactLabel,
  ContactLink,
  Highlight,
};
