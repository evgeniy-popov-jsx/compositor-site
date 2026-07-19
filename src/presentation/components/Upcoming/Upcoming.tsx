import { Data } from 'domain/mock/performances';
import { Styled } from './styles';
import { HighlightBlock } from 'presentation/components/Highlight-block/Highlight-block';
import { Loader } from 'presentation/components/Loader/Loader';

interface prop {
  data: Data;
}

export const Upcoming: React.FC<prop> = ({ data }) => {
  const hasHighlight = data.highlight;

  const content = (
    <Styled.HighlightContent>
      <Styled.Content $active={true}>
        {data.date} {data.link && `>`}
      </Styled.Content>
      <Styled.Content>{data.title}</Styled.Content>
      <Styled.Content>{data.orchestra}</Styled.Content>
      <Styled.Content>{data.description}</Styled.Content>
      <Styled.Content>{data.place}</Styled.Content>
    </Styled.HighlightContent>
  );

  if (hasHighlight) {
    return (
      <HighlightBlock>
        {data.photos && data.photos.length > 0 && (
          <Styled.PhotoWrapper>
            <Styled.Photo
              src={data.photos[0]}
              preview={{ mask: null, toolbarRender: () => null }}
              placeholder={<Loader />}
              alt={data.title}
            />
          </Styled.PhotoWrapper>
        )}
        {data.link ? (
          <Styled.Link to={data.link} target='_blank' rel='noopener noreferrer'>
            {content}
          </Styled.Link>
        ) : (
          content
        )}
      </HighlightBlock>
    );
  }

  return (
    <>
      {data.link ? (
        <Styled.Link to={data.link} target='_blank' rel='noopener noreferrer'>
          <Styled.Content $active={true}>
            {data.date} {`>`}
          </Styled.Content>
          <Styled.Content>{data.title}</Styled.Content>
          <Styled.Content>{data.orchestra}</Styled.Content>
          <Styled.Content>{data.description}</Styled.Content>
          <Styled.Content>{data.place}</Styled.Content>
        </Styled.Link>
      ) : (
        <>
          <Styled.Content $active={true}>{data.date}</Styled.Content>
          <Styled.Content>{data.title}</Styled.Content>
          <Styled.Content>{data.orchestra}</Styled.Content>
          <Styled.Content>{data.description}</Styled.Content>
          <Styled.Content>{data.place}</Styled.Content>
        </>
      )}
    </>
  );
};
