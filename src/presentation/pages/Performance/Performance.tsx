import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { data } from 'domain/mock/performances';
import { Styled } from './styles';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import AudioPlayer from 'presentation/components/Audio-player/Audio-player';

export const Performance: React.FC = () => {
  const { id } = useParams<{ id: string}>();
  const [ audioState, setAudioState ] = useState<boolean>(false);
  const performanceData = data.find(item => item.id === Number(id));
  const paragraphs = performanceData?.desc?.trim().split('\n').filter(paragraph => paragraph.length > 0);

  const handleToggleAudio = (audioState : boolean) => {
      setAudioState(!audioState);
  };

  const PreviewType = {
    mask: null,
    toolbarRender: ()=> null,
  };

  return (
    <ContentWrapper position={performanceData?.audio ? 'audio' : 'top'}>
      <Styled.GlobalStyle />
      <NavigateBack link='/performances'/>
      <Styled.ContentContainer>
        <Styled.Content>{performanceData?.date}</Styled.Content>
        <Styled.Content $active={true}>{performanceData?.title}</Styled.Content>
        {performanceData?.orchestra && <Styled.Content>{performanceData?.orchestra}</Styled.Content>}
        {performanceData?.description && <Styled.Content>{performanceData?.description}</Styled.Content>}
        {performanceData?.place && <Styled.Content>{performanceData?.place}</Styled.Content>}
      </Styled.ContentContainer>

      {performanceData?.map && (
        <Styled.Image 
          className="custom-preview"
          src={performanceData?.map}
          height={'150px'}
          preview={PreviewType}
          alt='polina korobkova'>
        </Styled.Image>
      )}

      {paragraphs?.map((paragraph, index) => (
        <Styled.Paragraph key={index}>{paragraph}</Styled.Paragraph>
      ))}
      {performanceData?.interview && <Styled.Link to={`${performanceData?.interviewSrc}`} target="_blank" rel="noopener noreferrer">{performanceData.interview}</Styled.Link>}
      <Styled.ImageContainer>
        <Styled.Image.PreviewGroup
          preview={{toolbarRender: ()=> null}}
        >
          {performanceData?.photos?.map((item) => {
            return (
              <Styled.Image 
                key={item}
                className="custom-preview"
                src={item} 
                width={'180px'}
                height={'180px'}
                preview={PreviewType}
                alt='polina korobkova'>
              </Styled.Image>
            )
          })}
        </Styled.Image.PreviewGroup>
      {performanceData?.videoSrc && 
        <Styled.Image
          width={'180px'}
          preview={{
            mask: null,
            destroyOnClose: true,
            imageRender: () => (
              <Styled.Iframe 
                src={performanceData?.videoSrc}
                frameBorder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </Styled.Iframe>
            ),
            toolbarRender: () => null,
          }}
          src="https://res.cloudinary.com/dgihggopi/image/upload/v1720435821/watch_video_j10gtr.png"
        />
      }
      </Styled.ImageContainer>
      {performanceData?.coop && <Styled.Paragraph>{performanceData?.coop}</Styled.Paragraph>}
      {performanceData?.link && <Styled.Link to={performanceData?.link}>{`more >`}</Styled.Link>}
      {performanceData?.audio && 
        <Styled.PlayerContainer $audioState={audioState}>
          {performanceData?.audio.length > 1 && (
            <Styled.ToggleContainer>
              <Styled.ToggleButton onClick={()=>handleToggleAudio(audioState)}>{`<`}</Styled.ToggleButton>
              <Styled.ToggleButton onClick={()=>handleToggleAudio(audioState)}>{`>`}</Styled.ToggleButton>
            </Styled.ToggleContainer>
          )}
          {performanceData?.audio.map((item)=>{
            return (
              <AudioPlayer src={item.audio} trackName={item.author} key={item.author}/>
            );
          })}
        </Styled.PlayerContainer>}
    </ContentWrapper>
  );
};
