import { Image as ANTImage} from 'antd';
import { Link as RLink} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ant-image-preview-mask {
    background-color: rgba(240, 241, 235, 0.2) !important;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  .ant-image-preview-progress {
    color: var(--color-text);
  }
`;
const Image = styled(ANTImage)`
  object-position: center;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s ease;
  
  &:hover {
    filter: brightness(70%);
  }
`;
const Link = styled(RLink)`
  max-width: max-content;
  font-size: 20px;
`;
const Paragraph = styled.p`
  text-align: justify;
  hyphens: auto;
  word-wrap: break-word;
  max-width: 550px;
  font-size: 20px;
  text-transform: lowercase;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 550px;  
`;
const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 31px;
  width: 90%;
  max-width: 845px;
  height: 110px;
  border: 2px solid var(--color-accent);
  background: var(--color-background);

  @media (max-width: 1280px) {
    width: 70%;
    left: calc(50% - 80px);
    transform: translateX(-50%);
  }
  @media (max-width: 1085px) {
    left: calc(50% - 100px);
    transform: translateX(-50%);
  }
  @media (max-width: 670px) {
    width: 98%;
    padding: 5px 10px;
    height: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 255px) {
    height: 105px;
  }
`;
const Iframe = styled.iframe`
  width: 50%;
  height: 50%;

  @media (max-width: 1660px) {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 80%;
  }
`;
export const Styled = {
  Link,
  GlobalStyle,
  Image,
  Paragraph,
  ImageContainer,
  PlayerContainer,
  Iframe
};