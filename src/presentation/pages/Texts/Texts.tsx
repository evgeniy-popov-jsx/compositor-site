import React from 'react';
import { data } from 'domain/mock/texts';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { Styled } from './styles';

export const Texts: React.FC = () => {

  return (
    <ContentWrapper position='bottom'>
      {data.map((item)=>{
        return (
          <Styled.Link to={item.slug} key={item.id}>{item.title}</Styled.Link>
        )
      })}
    </ContentWrapper>
  );
};
