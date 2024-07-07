import { Data } from 'domain/mock/performances';
import { Styled } from './styles';
import { Upcoming } from '../Upcoming/Upcoming';
import { Archive } from '../Archive/Archive';

interface prop {
  data: Data,
};

export const PerformanceItem: React.FC<prop> = ({ data }) => {

  return (
    <Styled.Container>
      {data.upcoming && 
        <Upcoming data={data} />
      }
      {!data.upcoming && 
        <Archive data={data} />
      }
    </Styled.Container>
  );
};
