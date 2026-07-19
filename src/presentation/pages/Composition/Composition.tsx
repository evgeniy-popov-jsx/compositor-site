import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { CompositionInfo } from 'presentation/components/Composition-info/Composition-info';
import { CompositionSection, data } from 'domain/mock/compositions';
import { Styled } from './styles';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import { Loader } from 'presentation/components/Loader/Loader';

export const CompositionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const compositionData = data.find((item) => item.slug === id);

  const PreviewType = {
    mask: null,
    toolbarRender: () => null,
  };

  const renderSection = (section: CompositionSection, index: number) => {
    switch (section.type) {
      case 'info':
        return compositionData && <CompositionInfo key={index} data={compositionData} />;
      case 'text':
        return <Styled.Paragraph key={index}>{section.content}</Styled.Paragraph>;
      case 'photo-pair':
        return (
          <Styled.PhotoPair key={index}>
            {section.images?.map((src, imgIndex) => (
              <Styled.PhotoPairItem key={imgIndex} $index={imgIndex}>
                <Styled.Image
                  className='custom-preview'
                  src={src}
                  preview={PreviewType}
                  placeholder={<Loader />}
                  alt={compositionData?.name}
                />
              </Styled.PhotoPairItem>
            ))}
          </Styled.PhotoPair>
        );
      case 'photo-grid':
        return (
          <Styled.PhotoGrid key={index}>
            {section.images?.map((src, imgIndex) => (
              <Styled.PhotoGridItem key={imgIndex} $index={imgIndex}>
                <Styled.Image
                  className='custom-preview'
                  src={src}
                  preview={PreviewType}
                  placeholder={<Loader />}
                  alt={compositionData?.name}
                />
              </Styled.PhotoGridItem>
            ))}
          </Styled.PhotoGrid>
        );
      case 'video':
        return (
          <Styled.VideoWrapper key={index}>
            <Styled.Image
              width={'100%'}
              preview={{
                mask: null,
                destroyOnClose: true,
                imageRender: () => (
                  <Styled.Iframe
                    src={section.src}
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  />
                ),
                toolbarRender: () => null,
              }}
              src='/preview.png'
              placeholder={<Loader />}
            />
          </Styled.VideoWrapper>
        );
      // case 'audio':
      //   return (
      //     compositionData && (
      //       <Styled.PlayerContainer key={index}>
      //         <AudioPlayer src={section.src || ''} trackName={compositionData.name} />
      //       </Styled.PlayerContainer>
      //     )
      //   );
      case 'link':
        return (
          <Styled.Link
            key={index}
            to={section.href || '#'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {section.label || section.content}
          </Styled.Link>
        );
      default:
        return null;
    }
  };

  return (
    <ContentWrapper position={compositionData?.trackUrl ? 'audio' : 'top'}>
      <Styled.GlobalStyle />
      <NavigateBack link='/compositions' />
      <Styled.Title>{compositionData?.name}</Styled.Title>
      <Styled.HeaderSection>
        <Styled.CoverImage
          className='custom-preview'
          src={compositionData?.cover}
          preview={PreviewType}
          placeholder={<Loader />}
          alt={compositionData?.name}
        />
        {compositionData?.sections?.some((s) => s.type === 'info')
          ? compositionData.sections.map((section, index) =>
              section.type === 'info' ? renderSection(section, index) : null,
            )
          : compositionData && <CompositionInfo data={compositionData} />}
      </Styled.HeaderSection>
      {compositionData?.sections?.map((section, index) => {
        if (section.type === 'info') return null;
        return renderSection(section, index);
      })}
      {compositionData?.performed && (
        <Styled.Paragraph>{compositionData.performed}</Styled.Paragraph>
      )}
      {compositionData?.coopName && (
        <Styled.Paragraph>{compositionData.coopName}</Styled.Paragraph>
      )}
    </ContentWrapper>
  );
};
