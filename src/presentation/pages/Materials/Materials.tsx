import React from 'react';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { CompositionInfo } from 'presentation/components/Composition-info/Composition-info';
import { data } from 'domain/mock/compositions';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import { Styled } from './styles';

export const Materials: React.FC = () => {
  const id  = 'anonymous-materials';
  const compositionData = data.find(item => item.slug === id);

  const paragraphs = compositionData?.description.trim().split('\n').filter(paragraph => paragraph.length > 0);

  const PreviewType = {
    mask: null,
    toolbarRender: ()=> null,
  };

  return (
    <ContentWrapper position={compositionData?.trackUrl ? 'audio' : 'top'}>
      <Styled.GlobalStyle />
      <NavigateBack link='/compositions'/>
      <Styled.Image 
        className="custom-preview"
        src={compositionData?.cover} 
        width={'180px'}
        height={'180px'}
        preview={PreviewType}
        alt='polina korobkova'>
      </Styled.Image>
      {compositionData && <CompositionInfo data={compositionData} />}
      {paragraphs?.map((paragraph, index) => (
        <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
      ))}
      <Styled.Link to={'anonymous-material_i'}>anonymous material i</Styled.Link>
      <Styled.Link to={'anonymous-material_ii'}>anonymous material ii</Styled.Link>
    </ContentWrapper>
  );
};
