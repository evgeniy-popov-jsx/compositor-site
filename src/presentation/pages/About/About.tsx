import React from 'react';
import { data } from 'domain/mock/about';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Highlight } from 'presentation/components/Highlight/Highlight';
import { Styled } from './styles';
import { Loader } from 'presentation/components/Loader/Loader';

export const About: React.FC = () => {
  const { photo, cv, sections, portfolio } = data;

  const PreviewType = {
    mask: null,
    toolbarRender: () => null,
  };

  return (
    <ContentWrapper position='top'>
      <Styled.Header>About</Styled.Header>
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
        if (section.type === 'text' && section.content === '— lin (they/them)') {
          return (
            <Styled.Paragraph key={index} style={{ fontSize: '28px' }}>
              <Highlight>{section.content}</Highlight>
            </Styled.Paragraph>
          );
        }
        return <Styled.Paragraph key={index}>{section.content}</Styled.Paragraph>;
      })}
      <Styled.CvLink href={cv} target='_blank' rel='noopener noreferrer'>
        cv {'>'}
      </Styled.CvLink>
      <Styled.CvLink
        style={{ marginTop: '-10px' }}
        href={portfolio}
        target='_blank'
        rel='noopener noreferrer'
      >
        portfolio {'>'}
      </Styled.CvLink>
    </ContentWrapper>
  );
};
