import styled from 'styled-components';

const DurationWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  font-size: 20px;
  color: var(--color-accent);
`;
const Content = styled.div` 
  flex: 1;
`;

const CurrentTime = styled.div`
  margin-top: 5px;
  
  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 8px;
  }
`;

const TotalDuration = styled.div`
  margin-top: 5px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 8px;
  }
`;

export const Styled = {
  DurationWrapper,
  CurrentTime,
  TotalDuration,
  Content
};
