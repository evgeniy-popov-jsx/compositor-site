import React from 'react';
import { data } from 'domain/mock/compositions';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Styled } from './styles';

export const Compositions: React.FC = () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * (80 - 40 + 1)) + 40;
  }
  const res = getRandomNumber();

  return (
    <ContentWrapper position='bottom'>
      {data.map((item) => (
        <Styled.ListItem key={item.id}>
          <Styled.Link to={`/compositions/${item.slug}`}>
            {item.name}
          </Styled.Link>
          <Styled.Animation className="animation">
            <svg height='100%' width='100%'>
              <Styled.Line className="line" x1='0' x2='100%' y1='50%' y2='50%' strokeWidth='1px' stroke='#164DC4' />
              <Styled.LineDiagonal className="line_diagonal" x1={`${res}%`} x2={`${res + 0.4}%`} y1='90%' y2='10%' />
              <Styled.LineDiagonal className="line_diagonal" x1={`${res - 0.2}%`} x2={`${res - 0.6}%`} y1='10%' y2='90%' />
              <Styled.Circle className="circle" cx='3px' cy='50%' r='3px' />
              <Styled.Circle className="circle" cx={`${getRandomNumber()}%`} cy='50%' r='3px' />
            </svg>
          </Styled.Animation>
        </Styled.ListItem>
      ))}
    </ContentWrapper>
  );
};