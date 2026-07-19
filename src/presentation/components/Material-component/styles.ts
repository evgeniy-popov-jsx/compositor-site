import { Image as ANTImage } from 'antd';
import { Link as RLink } from 'react-router-dom';
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

const Title = styled.h1`
  color: var(--color-accent);
  font-family: 'Syne Mono', monospace;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const HeaderSection = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
  max-width: 1100px;
  margin-bottom: 20px;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

const CoverImage = styled(ANTImage)`
  width: 550px !important;
  height: 180px;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    filter: brightness(70%);
  }

  @media (max-width: 670px) {
    width: 100% !important;
    height: auto;
    max-width: 300px;
  }
`;

const Image = styled(ANTImage)`
  width: 100%;
  height: 100%;
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
  text-transform: lowercase;
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

const PhotoPair = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;
  max-width: 1000px;
  margin-top: 10px;
  margin-bottom: -100px;
  align-items: start;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoPairItem = styled.div<{ $index: number }>`
  ${({ $index }) =>
    $index === 1 &&
    `
    margin-top: 300px;
  `}

  @media (max-width: 670px) {
    margin-top: 0 !important;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, auto);
  gap: 20px;
  max-width: 900px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: start;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const PhotoGridItem = styled.div<{ $index: number }>`
  ${({ $index }) =>
    $index === 0 &&
    `
    grid-column: 1 / 3;
    grid-row: 1 / 4;
  `}
  ${({ $index }) =>
    $index === 1 &&
    `
    grid-column: 3 / 9;
    grid-row: 2 / 6;
  `}
  ${({ $index }) =>
    $index === 2 &&
    `
    grid-column: 1 / 4;
    grid-row: 6 / 8;
  `}
  ${({ $index }) =>
    $index === 3 &&
    `
    grid-column: 4 / 8;
    grid-row: 6 / 9;
  `}

  @media (max-width: 670px) {
    grid-column: 1 !important;
    grid-row: auto !important;
  }
`;

const VideoWrapper = styled.div`
  max-width: 550px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Iframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
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

export const Styled = {
  GlobalStyle,
  Title,
  HeaderSection,
  CoverImage,
  Image,
  Link,
  Paragraph,
  PhotoPair,
  PhotoPairItem,
  PhotoGrid,
  PhotoGridItem,
  VideoWrapper,
  Iframe,
  PlayerContainer,
};