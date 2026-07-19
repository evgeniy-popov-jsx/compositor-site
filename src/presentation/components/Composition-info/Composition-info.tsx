import { CompositionData } from 'domain/mock/compositions';
import { Styled } from './styles';

interface prop {
  data: CompositionData;
}

export const CompositionInfo: React.FC<prop> = ({ data }) => {
  return (
    <Styled.Container>
      {data.duration && (
        <Styled.Row>
          <Styled.Label>duration</Styled.Label>
          <Styled.Value>{data.duration}</Styled.Value>
        </Styled.Row>
      )}
      {data.instrumentation && (
        <Styled.Row>
          <Styled.Label>instrumentation</Styled.Label>
          <Styled.Value>{data.instrumentation}</Styled.Value>
        </Styled.Row>
      )}
      {data.commission && (
        <Styled.Row>
          <Styled.Label>commission</Styled.Label>
          <Styled.Value>{data.commission}</Styled.Value>
        </Styled.Row>
      )}
      {data.performedBy && (
        <Styled.Row>
          <Styled.Label>performed by</Styled.Label>
          <Styled.Value>{data.performedBy}</Styled.Value>
        </Styled.Row>
      )}
      {data.projectDescription && (
        <Styled.ProjectLink
          href={data.projectDescription}
          target='_blank'
          rel='noopener noreferrer'
        >
          project description &gt;
        </Styled.ProjectLink>
      )}
    </Styled.Container>
  );
};
