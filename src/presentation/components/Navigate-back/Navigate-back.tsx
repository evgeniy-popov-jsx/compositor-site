import { Styled } from './styles';

export const NavigateBack: React.FC<{ link: string }> = ({ link }) => {
  return (
    <Styled.Container>
        <Styled.Link to={link}>{`< back`}</Styled.Link>
    </Styled.Container>
  );
};
