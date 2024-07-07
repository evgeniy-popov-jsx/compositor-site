import { Image as ANTImage } from 'antd';
import { Link as RLink} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ant-image-preview-mask {
    background-color: rgba(240, 241, 235, 0.2) !important;
    backdrop-filter: blur(5px);
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
const Paragraph = styled.p`
  text-align: justify;
  hyphens: auto;
  max-width: 550px;
  font-size: 20px;
`;
const Sv = styled(RLink)`
  display: block;
  width: 50px;
  font-size: 20px;
`;
export const Styled = {
  Image,
  GlobalStyle,
  Paragraph,
  Sv
};