import React from 'react';
import { data } from 'domain/mock/about';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Styled } from './styles';
import { Loader } from 'presentation/components/Loader/Loader';

export const About: React.FC = () => {
  const { photo, cv, sections } = data;

  const PreviewType = {
    mask: null,
    toolbarRender: () => null,
  };

  return (
    <ContentWrapper position='top'>
      <Styled.GlobalStyle />
      {sections.map((section, index) => {
        if (section.type === 'photo') {
          return (
            <Styled.PhotoWrapper key={index}>
              <Styled.Image
                src={photo}
                preview={PreviewType}
                placeholder={<Loader />}
                alt='lin korobkova'
              />
            </Styled.PhotoWrapper>
          );
        }
        if (section.type === 'quote') {
          return <Styled.Quote key={index}>{section.content}</Styled.Quote>;
        }
        return <Styled.Paragraph key={index}>{section.content}</Styled.Paragraph>;
      })}
      <Styled.CvLink href={cv} target='_blank' rel='noopener noreferrer'>
        [cv/resume]
      </Styled.CvLink>
    </ContentWrapper>
  );
};
