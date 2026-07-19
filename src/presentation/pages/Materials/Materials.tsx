import React from 'react';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { CompositionInfo } from 'presentation/components/Composition-info/Composition-info';
import { CompositionSection, data } from 'domain/mock/compositions';
import { NavigateBack } from 'presentation/components/Navigate-back/Navigate-back';
import { Styled } from './styles';
import { Loader } from 'presentation/components/Loader/Loader';

export const Materials: React.FC = () => {
  const id = 'anonymous-materials';
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
          <Styled.ImageContainer key={index}>
            {section.images?.map((src, imgIndex) => (
              <Styled.Image
                key={imgIndex}
                className='custom-preview'
                src={src}
                preview={PreviewType}
                placeholder={<Loader />}
                alt={compositionData?.name}
              />
            ))}
          </Styled.ImageContainer>
        );
      case 'photo-grid':
        return (
          <Styled.ImageContainer key={index}>
            {section.images?.map((src, imgIndex) => (
              <Styled.Image
                key={imgIndex}
                className='custom-preview'
                src={src}
                preview={PreviewType}
                placeholder={<Loader />}
                alt={compositionData?.name}
              />
            ))}
          </Styled.ImageContainer>
        );
      case 'video':
        return (
          <Styled.ImageContainer key={index}>
            <Styled.Image
              width={'100%'}
              preview={{
                mask: null,
                destroyOnClose: true,
                imageRender: () => (
                  <Styled.Iframe
                    src={section.src}
                    frameBorder='0'
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
          </Styled.ImageContainer>
        );
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
      <Styled.CoverImage
        className='custom-preview'
        src={compositionData?.cover}
        preview={PreviewType}
        placeholder={<Loader />}
        alt={compositionData?.name}
      />
      {compositionData?.sections?.some((s) => s.type === 'info')
        ? compositionData.sections.map((section, index) =>
            section.type === 'info' ? renderSection(section, index) : null
          )
        : compositionData && <CompositionInfo data={compositionData} />}
      {compositionData?.sections?.map((section, index) => {
        if (section.type === 'info') return null;
        return renderSection(section, index);
      })}
      <Styled.Link to={'anonymous-material_i'}>anonymous material i</Styled.Link>
      <Styled.Link to={'anonymous-material_ii'}>anonymous material ii</Styled.Link>
    </ContentWrapper>
  );
};
