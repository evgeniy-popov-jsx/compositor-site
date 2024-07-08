import { Image as ANTImage } from 'antd';
import { Link as RLink} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ant-image-preview-mask {
    background-color: rgba(240, 241, 235, 0.2) !important;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  .ant-image {
    max-width: 550px;
  }
`;
const Image = styled(ANTImage)`
  object-position: center;
  object-fit: cover;
  max-width: 550px;
  max-height: 500px ;
  cursor: pointer;
  transition: filter 0.3s ease;
  
  &:hover {
    filter: brightness(70%);
  }
`;
const Paragraph = styled.p`
  text-align: justify;
  hyphens: auto;
  max-width: 550px;
  font-size: 20px;
`;
const Link = styled(RLink)`
  display: block;
  text-decoration: underline;
  max-width: 300px;
  font-size: 20px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
export const Styled = {
  Image,
  GlobalStyle,
  Paragraph,
  Link,
  LinkContainer
};