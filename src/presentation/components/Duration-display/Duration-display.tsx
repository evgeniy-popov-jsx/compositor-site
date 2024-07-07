import React, { ReactNode } from 'react';
import { Styled } from './styles';

interface DurationDisplayProps {
  currentTime: number;
  duration: number;
  children: ReactNode;
}

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const DurationDisplay: React.FC<DurationDisplayProps> = ({ currentTime, duration, children }) => {
  return (
    <Styled.DurationWrapper>
      <Styled.CurrentTime>{formatTime(currentTime)}</Styled.CurrentTime>
      <Styled.Content>
        {children}
      </Styled.Content>
      <Styled.TotalDuration>{duration > 0 ? formatTime(duration) : '00:00'}</Styled.TotalDuration>
    </Styled.DurationWrapper>
  );
};

export default DurationDisplay;
