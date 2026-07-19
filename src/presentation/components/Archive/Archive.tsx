import { Data } from 'domain/mock/performances';
import { Styled } from './styles';
import { HighlightBlock } from 'presentation/components/Highlight-block/Highlight-block';
import { Loader } from 'presentation/components/Loader/Loader';

interface prop {
  data: Data;
}

export const Archive: React.FC<prop> = ({ data }) => {
  const hasHighlight = data.highlight;

  const content = (
    <Styled.HighlightContent>
      <Styled.Content>
        {data.date} {(data.full || data.src) && `>`}
      </Styled.Content>
      <Styled.Content $active={true}>{data.title}</Styled.Content>
      {data.orchestra && <Styled.Content>{data.orchestra}</Styled.Content>}
      {data.description && <Styled.Content>{data.description}</Styled.Content>}
      {data.place && <Styled.Content>{data.place}</Styled.Content>}
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
        {data.full && <Styled.Link to={`${data.id}`}>{content}</Styled.Link>}
        {data.src && (
          <Styled.Link to={data.link} target='_blank' rel='noopener noreferrer'>
            {content}
          </Styled.Link>
        )}
        {!data.full && !data.src && content}
      </HighlightBlock>
    );
  }

  return (
    <>
      {data.src && (
        <Styled.Link to={data.link} target='_blank' rel='noopener noreferrer'>
          <Styled.Content>
            {data.date} {`>`}
          </Styled.Content>
          <Styled.Content $active={true}>{data.title}</Styled.Content>
          {data.orchestra && <Styled.Content>{data.orchestra}</Styled.Content>}
          {data.description && <Styled.Content>{data.description}</Styled.Content>}
          {data.place && <Styled.Content>{data.place}</Styled.Content>}
        </Styled.Link>
      )}
      {!data.src && (
        <>
          <Styled.Content>{data.date}</Styled.Content>
          <Styled.Content $active={true}>{data.title}</Styled.Content>
          {data.orchestra && <Styled.Content>{data.orchestra}</Styled.Content>}
          {data.description && <Styled.Content>{data.description}</Styled.Content>}
          {data.place && <Styled.Content>{data.place}</Styled.Content>}
        </>
      )}
    </>
  );
};
