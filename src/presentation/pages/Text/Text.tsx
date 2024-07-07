import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { data } from 'domain/mock/texts';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import { Styled } from './styles';

export const Text: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const textData = data.find(item => item.slug === id);

  const paragraphs = textData?.description.trim().split('\n').filter(paragraph => paragraph.length > 0);

  return (
    <ContentWrapper position={'top'}>
      <NavigateBack link='/texts'/>
      <Styled.Title>{textData?.title}</Styled.Title>
      {paragraphs?.map((paragraph, index) => (
        <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
      ))}
      {textData && <Styled.Link to={textData.src}>{`read more >`}</Styled.Link>}
    </ContentWrapper>
  );
};
