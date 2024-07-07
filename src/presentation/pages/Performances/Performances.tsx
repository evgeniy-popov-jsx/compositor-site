import React, { useEffect, useRef, useState } from 'react';
import { ContentWrapper } from 'presentation/components/Content-wrapper/Content-wrapper';
import { data } from 'domain/mock/performances';
import { PerformanceItem } from 'presentation/components/Performance-item/Performance-item';
import { Styled } from './styles';

export const Performances: React.FC = () => {
  const [filter, setFilter] = useState<boolean>(JSON.parse(localStorage.getItem('filter') || 'true'));
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [firstVisit, setFirstVisit] = useState<boolean>(true);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const filteredData = data.filter(item => filter ? item.upcoming === true : item.upcoming === false);

  const handleFilter = (value: boolean) => {
    if (filter !== value) {
      setFilter(value);
      localStorage.setItem('filter', JSON.stringify(value));
    }
  };

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;
    if (!contentWrapper) return;

    const handleScroll = () => {
      if (!scrolling) {
        sessionStorage.setItem('scrollPosition', contentWrapper.scrollTop.toString());
      }
    };

    const initialScroll = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition !== null && firstVisit) {
        setFirstVisit(false);
        setScrolling(true);
        contentWrapper.scrollTo({
          top: parseInt(scrollPosition, 10),
        });
        setScrolling(false);
      }
    };
    contentWrapper.addEventListener('scroll', handleScroll);

    initialScroll();

    return () => {
      contentWrapper.removeEventListener('scroll', handleScroll);
    };
  }, [firstVisit, scrolling]);

  return (
    <ContentWrapper position='top' ref={contentWrapperRef}>
      <Styled.Filter>
        <Styled.Button onClick={() => handleFilter(false)} $active={!filter}>
          archive
        </Styled.Button>
        <Styled.Button onClick={() => handleFilter(true)} $active={filter}>
          upcoming
        </Styled.Button>
      </Styled.Filter>
      {filteredData.map((item) => (
        <PerformanceItem 
          data={item} 
          key={item.id}
        />
      ))}
    </ContentWrapper>
  );
};
