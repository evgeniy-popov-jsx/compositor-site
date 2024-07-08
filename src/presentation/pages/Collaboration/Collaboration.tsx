import React from 'react';
import { data } from 'domain/mock/collobaration';
import { Styled } from './styles';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Helmet } from 'react-helmet';

export const Collaboration: React.FC = () => {
  const { 
    photo, 
    collaborationImg, 
    collaborationName, 
    description, 
    contact 
  } = data;

  const paragraphs = description.trim().split('\n').filter(paragraph => paragraph.length > 0);

  const PreviewType = {
    mask: null,
    toolbarRender: ()=> null,
  };

  return (
    <ContentWrapper position='top'>
      <Helmet>
        <title>polina korobkova | collaboration</title>
        <meta name="description" content="we treasure composing as a way of thinking and structuring. it is therefore not necessarily linked to sounds. we aim for unidentifiable occurrences which are in-between various mediums, genres and forms." />
      </Helmet>
      <Styled.GlobalStyle />
      <Styled.Image 
        className="custom-preview"
        src={photo} 
        width={'180px'}
        height={'180px'}
        preview={PreviewType}
        alt='polina korobkova'>
      </Styled.Image>
      {paragraphs.map((paragraph, index) => (
        <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
      ))}
      <Styled.LinkContainer>
        <Styled.Paragraph>Contact:</Styled.Paragraph>
        <Styled.Link to={`mailto:${contact}`}>{contact}</Styled.Link>
      </Styled.LinkContainer>
      <Styled.Image 
        className="custom-preview"
        src={collaborationImg}
        preview={PreviewType}
        alt='polina korobkova'>
      </Styled.Image>
      <Styled.Paragraph>{collaborationName}</Styled.Paragraph>
    </ContentWrapper>
  );
};
