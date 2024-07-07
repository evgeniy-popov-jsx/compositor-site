import { useLocation } from 'react-router-dom';
import { Styled } from './styles';
import { Animation } from '../Animation/Animation';
import { useState } from 'react';
import { Setting } from '../Animation/interface';

interface Prop {
  setting: Setting,
  url: string,
}

export const MenuItem: React.FC<Prop> = ({ setting, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location  = useLocation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getFirstSegment = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.length > 0 ? `/${segments[0]}` : '/';
  };
  const currentSegment = getFirstSegment(location.pathname);
  const isActive = currentSegment === `/${url}`;

  return (
    <Styled.Link
      to={`/${url}`}
      $isActive={currentSegment === `/${url}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {url}
      <Animation setting={setting} isHovered={isActive ? false : isHovered} />
    </Styled.Link>
  );
};