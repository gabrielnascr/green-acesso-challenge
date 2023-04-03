import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  border: 3px solid #E8E8E8;
  border-radius: 10px;
  padding-bottom: 15px;
  padding: 12px;
  cursor: pointer;

  transition: 1s;

  &:hover {
    transform: scale(1.03)
  }
`;

export const Row = styled.div`
  flex-direction: row;
  align-items: center;
`;

export const CharacterAvatar = styled.img`
  background-color: #E8E8E8;
  width: 220px;
  height: 240px;
  border-radius: 10px;  
  border: none;
  border: 3px solid #E8E8E8;
  outline: none;
  
`;

export const CharacterName = styled.p`
  margin-top: 6px;
  font-size: 22px;
  color: #53abee;
  max-width: 220px;

`

export const LocationAtText = styled.p`
  margin-top: 15px;
  color: #5A5A5A;
  font-size: 15px;
`;
export const LocationText = styled.p`
  color: #5A5A5A;
  font-size: 18px;
  max-width: 220px;
`;

export const Flag = styled.span`
  
`