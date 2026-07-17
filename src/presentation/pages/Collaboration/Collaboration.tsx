import React from 'react';
import { data } from 'domain/mock/collobaration';
import { Styled } from './styles';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Loader } from 'presentation/components/Loader/Loader';

export const Collaboration: React.FC = () => {
  const { photo1, photo2, contact, sections } = data;

  const photos = [photo1, photo2];

  const PreviewType = {
    mask: null,
    toolbarRender: () => null,
  };

  return (
    <ContentWrapper position='top'>
      <Styled.GlobalStyle />
      {sections.map((section, index) => {
        if (section.type === 'photo') {
          const Wrapper = section.photoIndex === 1 ? Styled.PhotoOffset : Styled.PhotoWrapper;
          return (
            <Wrapper key={index}>
              <Styled.Image
                src={photos[section.photoIndex]}
                preview={PreviewType}
                placeholder={<Loader />}
                alt='polina korobkova'
              />
            </Wrapper>
          );
        }
        if (section.type === 'quote') {
          return <Styled.Quote key={index}>{section.content}</Styled.Quote>;
        }
        if (section.type === 'highlight') {
          return <Styled.Highlight key={index}>{section.content}</Styled.Highlight>;
        }
        if (section.type === 'contact') {
          return (
            <Styled.ContactWrapper key={index}>
              <Styled.ContactLabel>contact:</Styled.ContactLabel>
              <Styled.ContactLink href={`mailto:${contact}`}>
                {contact}
              </Styled.ContactLink>
            </Styled.ContactWrapper>
          );
        }
        return <Styled.Paragraph key={index}>{section.content}</Styled.Paragraph>;
      })}
    </ContentWrapper>
  );
};
