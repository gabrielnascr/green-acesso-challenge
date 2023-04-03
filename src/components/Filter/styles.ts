import styled from "styled-components";

interface Props {
  isSelected: boolean;
}

export const Container = styled.div`
  color: #595959;
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-area: f;
`;

export const Title = styled.h2``;

export const ClearFilterText = styled.span`
  margin-bottom: 10px;
  color: #53abee;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.div`
  border: 2px solid #53abee;
  padding: 30px;
  border-radius: 15px;
  position: relative;
`;

export const FilterType = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;
`;

export const FilterTypeTitle = styled.span`
  font-size: 18px;
  font-weight: 600;

  margin-bottom: 8px;
`;

export const FilterBadgeContainer = styled.div`
  display: flex;
  gap: 10px; 

  flex-wrap: wrap;
`;

export const FilterBadge = styled.div<Props>`
  background-color: ${( props ) => props.isSelected ? '#53ABEE' : 'white'};
  cursor: pointer;
  border: 2px solid #53ABEE;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 8px 20px;
  text-align: center;

  border-radius: 12px;
`;

export const FilterBadgeText = styled.div<Props>`
  color: ${( props ) => props.isSelected ? 'white' : '#53ABEE'};
`;
