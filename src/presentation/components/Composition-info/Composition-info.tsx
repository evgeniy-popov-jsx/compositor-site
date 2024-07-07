import { CompositionData } from 'domain/mock/compositions';
import { Styled } from './styles';

interface prop {
  data: CompositionData,
};

export const CompositionInfo: React.FC<prop> = ({ data }) => {

  return (
    <Styled.Container>
      <Styled.Content>{data.name}</Styled.Content>
      <Styled.Content>{data.date}</Styled.Content>
      <Styled.Content>{data.orchestra}</Styled.Content>
      <Styled.Content>{data.time}</Styled.Content>
    </Styled.Container>
  );
};
