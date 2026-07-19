import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { data } from 'domain/mock/texts';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import { Highlight } from 'presentation/components/Highlight/Highlight';
import { Styled } from './styles';

const renderHighlightedText = (text: string) => {
  const parts = text.split(/\|\|(.+?)\|\|/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <Highlight key={i}>{part}</Highlight> : part
  );
};

export const Text: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const textData = data.find(item => item.slug === id);

  const paragraphs = textData?.description?.trim().split('\n').filter(paragraph => paragraph.length > 0);

  return (
    <ContentWrapper position={'top'}>
      <NavigateBack link='/texts'/>
      <Styled.Title>
        {textData?.title}
        <Styled.Date>{textData?.date}</Styled.Date>
      </Styled.Title>
      {paragraphs?.map((paragraph, index) => (
        <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
      ))}
      {textData?.sections?.map((section, index) => {
        if (section.type === 'text') {
          return (
            <Styled.Paragraph key={index}>
              {section.content ? renderHighlightedText(section.content) : null}
            </Styled.Paragraph>
          );
        }
        if (section.type === 'photo') {
          return (
            <Styled.PhotoWrapper key={index} $align={section.photoAlign}>
              <Styled.Image src={section.src} alt="" />
            </Styled.PhotoWrapper>
          );
        }
        if (section.type === 'quote') {
          return <Styled.Quote key={index}>{section.content}</Styled.Quote>;
        }
        return null;
      })}
      {textData && <Styled.Link to={textData.src} target="_blank" rel="noopener noreferrer">{`read more >`}</Styled.Link>}
    </ContentWrapper>
  );
};
