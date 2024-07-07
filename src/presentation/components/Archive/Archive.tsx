import { Data } from 'domain/mock/performances';
import { Styled } from './styles';

interface prop {
  data: Data,
};

export const Archive: React.FC<prop> = ({ data }) => {

  return (
    <>
      {data.full && (
        <Styled.Link to={`${data.id}`}>
          <Styled.Content>{data.date} {`>`}</Styled.Content>
          <Styled.Content $active={true}>{data.title}</Styled.Content>
          {data.orchestra && <Styled.Content>{data.orchestra}</Styled.Content>}
          {data.description && <Styled.Content>{data.description}</Styled.Content>}
          {data.place && <Styled.Content>{data.place}</Styled.Content>}
        </Styled.Link>
      )}

      {data.full || !data.src && (
        <>
          <Styled.Content>{data.date}</Styled.Content>
          <Styled.Content $active={true}>{data.title}</Styled.Content>
          {data.orchestra && <Styled.Content>{data.orchestra}</Styled.Content>}
          {data.description && <Styled.Content>{data.description}</Styled.Content>}
          {data.place && <Styled.Content>{data.place}</Styled.Content>}
        </>
      )}

      {data.src && (
        <Styled.Link to={data.link} target="_blank" rel="noopener noreferrer">
          <Styled.Content>{data.date} {`>`}</Styled.Content>
          <Styled.Content $active={true}>{data.title}</Styled.Content>
          {data.orchestra && <Styled.Content>{data.orchestra}</Styled.Content>}
          {data.description && <Styled.Content>{data.description}</Styled.Content>}
          {data.place && <Styled.Content>{data.place}</Styled.Content>}
        </Styled.Link>
      )}
    </>
  );
};
