import { useState } from 'react';
import { Styled } from './styles';
import { useLocation } from 'react-router-dom';

export const Burger: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const location  = useLocation();

  const getFirstSegment = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.length > 0 ? `/${segments[0]}` : '/';
  };
  const currentSegment = getFirstSegment(location.pathname);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Styled.Burger>
      <Styled.Container>
       <Styled.Button onClick={handleChange}>
          <Styled.Line $isChecked={isChecked} $position="top" />
          <Styled.Line $isChecked={isChecked} $position="middle" />
          <Styled.Line $isChecked={isChecked} $position="bottom" />
        </Styled.Button>
        <Styled.Wrapper>
          <Styled.Menu $isChecked={isChecked}>
            <Styled.Link 
              to={'/about'} 
              $isActive={currentSegment === '/about'}
              onClick={handleChange}
            >
              about
            </Styled.Link>
            <Styled.Link 
              to={'/collaboration'} 
              $isActive={currentSegment === '/collaboration'}
              onClick={handleChange}
            >
              collaboration
            </Styled.Link>
            <Styled.Link 
              to={'/compositions'} 
              $isActive={currentSegment === '/compositions'}
              onClick={handleChange}
            >
              compositions
            </Styled.Link>
            <Styled.Link 
              to={'/texts'} 
              $isActive={currentSegment === '/texts'}
              onClick={handleChange}
            >
              texts
            </Styled.Link>
            <Styled.Link 
              to={'/performances'} 
              $isActive={currentSegment === '/performances'}
              onClick={handleChange}
            >
              performances
            </Styled.Link>
          </Styled.Menu>
          <Styled.Footer $isChecked={isChecked}>
            <Styled.Link onClick={handleChange} target="_blank" rel="noopener noreferrer" to='https://soundcloud.com/korobkova'>soundcloud</Styled.Link>
            <Styled.Link onClick={handleChange} target="_blank" rel="noopener noreferrer" to='https://www.youtube.com/@PolinaKorobkova/featured'>youtube</Styled.Link>
            <Styled.Link onClick={handleChange} target="_blank" rel="noopener noreferrer" to='mailto:p.korobkova@gmail.com'>e-mail</Styled.Link>
          </Styled.Footer>
        </Styled.Wrapper>
      </Styled.Container>
      <Styled.Blur $isChecked={isChecked} onClick={handleChange}/>
    </Styled.Burger>
  );
};
