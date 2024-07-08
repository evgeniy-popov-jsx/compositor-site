import React from 'react';
import { data } from 'domain/mock/collobaration';
import { Styled } from './styles';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';

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
