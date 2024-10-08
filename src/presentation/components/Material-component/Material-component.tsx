import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { CompositionInfo } from 'presentation/components/Composition-info/Composition-info';
import { materials } from 'domain/mock/compositions';
import { Styled } from './styles';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import AudioPlayer from 'presentation/components/Audio-player/Audio-player';
import { Loader } from '../Loader/Loader';

export const MaterialComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const compositionData = materials.find(item => item.slug === id);

  const paragraphs = compositionData?.description.trim().split('\n').filter(paragraph => paragraph.length > 0);

  const PreviewType = {
    mask: null,
    toolbarRender: ()=> null,
  };

  return (
    <ContentWrapper position={compositionData?.trackUrl ? 'audio' : 'top'}>
      <Styled.GlobalStyle />
      <NavigateBack link='/compositions/anonymous-materials'/>
      <Styled.Image 
        className="custom-preview"
        src={compositionData?.cover} 
        width={'180px'}
        height={'180px'}
        preview={PreviewType}
        placeholder={<Loader />}
        alt='polina korobkova'>
      </Styled.Image>
      {compositionData && <CompositionInfo data={compositionData} />}
      {paragraphs?.map((paragraph, index) => (
        <Styled.Paragraph key={index}>
          {paragraph}
          <br></br>
          {compositionData?.srcLink && <Styled.Link to={compositionData.srcLink} target="_blank" rel="noopener noreferrer">{compositionData.srcTitle}</Styled.Link>}
        </Styled.Paragraph>
      ))}
      <Styled.ImageContainer>
        <Styled.Image.PreviewGroup
          preview={{toolbarRender: ()=> null}}
        >
          {compositionData?.images?.map((item) => {
            return (
              <Styled.Image 
                key={item}
                className="custom-preview"
                src={item} 
                width={'180px'}
                height={'180px'}
                preview={PreviewType}
                placeholder={<Loader />}
                alt='polina korobkova'>
              </Styled.Image>
            )
          })}
        </Styled.Image.PreviewGroup>
        {compositionData?.videoSrc && 
          <Styled.Image
            width={'180px'}
            preview={{
              mask: null,
              destroyOnClose: true,
              imageRender: () => (
                <Styled.Iframe 
                  src={compositionData?.videoSrc}
                  frameBorder="0" 
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </Styled.Iframe>
              ),
              toolbarRender: () => null,
            }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        }
      </Styled.ImageContainer>
      {compositionData?.code && <Styled.Link to={compositionData?.code} target="_blank" rel="noopener noreferrer">{`code >`}</Styled.Link>}
      {compositionData?.score && <Styled.Link to={compositionData?.score} target="_blank" rel="noopener noreferrer">{`score >`}</Styled.Link>}
      {compositionData?.coopName && <Styled.Paragraph>{compositionData?.coopName}</Styled.Paragraph>}
      {compositionData?.trackUrl && 
        <Styled.PlayerContainer>
          <AudioPlayer src={compositionData.trackUrl} trackName={compositionData.name}/>
        </Styled.PlayerContainer>}
    </ContentWrapper>
  );
};
