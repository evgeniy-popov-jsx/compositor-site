import { Data } from 'domain/mock/performances';
import { Styled } from './styles';

interface prop {
  data: Data,
};

export const Upcoming: React.FC<prop> = ({ data }) => {

  return (
    <>
      {data.link ? (
          <>
            <Styled.Link to={data.link} target="_blank" rel="noopener noreferrer">
              <Styled.Content $active={true}>{data.date} {`>`}</Styled.Content>
              <Styled.Content>{data.title}</Styled.Content>
              <Styled.Content>{data.orchestra}</Styled.Content>
              <Styled.Content>{data.description}</Styled.Content>
              <Styled.Content>{data.place}</Styled.Content>
            </Styled.Link>
          </>
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
