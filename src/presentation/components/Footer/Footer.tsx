import { Styled } from './styles';

export const Footer: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Link target="_blank" rel="noopener noreferrer" to='https://soundcloud.com/korobkova'>soundcloud</Styled.Link>
      <Styled.Link target="_blank" rel="noopener noreferrer" to='https://www.youtube.com/@PolinaKorobkova/featured'>youtube</Styled.Link>
      <Styled.Link target="_blank" rel="noopener noreferrer" to='mailto:p.korobkova@gmail.com'>e-mail</Styled.Link>
    </Styled.Container>
  );
};
