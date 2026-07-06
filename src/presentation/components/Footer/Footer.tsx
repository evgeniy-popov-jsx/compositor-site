import { Styled } from './styles';

export const Footer: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Blocks>
        <Styled.Block>
          <Styled.BlockTitle>current project-in-progress</Styled.BlockTitle>
          <Styled.BlockText>«implanted memories» (2019–2026)</Styled.BlockText>
          <Styled.BlockText>
            for the singer Johanna Vargas, self-playing, microtonal arciorgano and a
            video-projection
          </Styled.BlockText>
          <Styled.BlockLink to='/compositions/implanted-memories'>
            explore more &gt;
          </Styled.BlockLink>
        </Styled.Block>
        <Styled.Block>
          <Styled.BlockTitle>recent events</Styled.BlockTitle>
          <Styled.BlockText>
            06.02.2026 «implanted memories» at the ECLAT festival in Stuttgart
          </Styled.BlockText>
          <Styled.BlockText>
            28.11.2025 Portrait concert in Turin with a new work for Quartetto Maurice at
            the Musica in Prossimità
          </Styled.BlockText>
          <Styled.BlockText>
            29.10.2025 Receiving the Young Composers Forum award from the Ernst von
            Siemens Music Foundation, followed by a panel discussion with Isabel Mundry
            and a concert with Jean-Pierre Collot at the Bavarian Academy of Fine Arts
          </Styled.BlockText>
        </Styled.Block>
        <Styled.Block>
          <Styled.BlockTitle>links</Styled.BlockTitle>
          <Styled.BlockLink
            target='_blank'
            rel='noopener noreferrer'
            to='https://soundcloud.com/korobkova'
          >
            soundcloud
          </Styled.BlockLink>
          <Styled.BlockLink
            target='_blank'
            rel='noopener noreferrer'
            to='https://www.youtube.com/@PolinaKorobkova/featured'
          >
            youtube
          </Styled.BlockLink>
          <Styled.BlockLink
            target='_blank'
            rel='noopener noreferrer'
            to='mailto:p.korobkova@gmail.com'
          >
            email
          </Styled.BlockLink>
          <Styled.BlockLink target='_blank' rel='noopener noreferrer' to='#'>
            instagram
          </Styled.BlockLink>
        </Styled.Block>
      </Styled.Blocks>
    </Styled.Wrapper>
  );
};
