import styled from 'styled-components';
import Skeleton from '../..';


export const Container = styled.div`
  overflow: hidden;
  border: 3px solid #E8E8E8;
  border-radius: 10px;
  padding-bottom: 15px;
`;

export const CustomSkeleton = styled(Skeleton)`
  border-radius: 100px;
  margin-bottom: -10px;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 460px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Row = styled.div`
  flex-direction: row;
  align-items: center;
`;