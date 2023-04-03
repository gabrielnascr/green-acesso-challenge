import { StatusEnum } from "@/redux/modules/characters/characterSlice";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterAvatar = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CharacterName = styled.p`
  color: #53abee;
  font-size: 32px;
  margin-bottom: 15px;
  text-align: center;
`;

interface StatusContainerProps {
  status: StatusEnum;
}

export const StatusContainer = styled.div<StatusContainerProps>`
  border-radius: 10px;
  margin-top: 10px;
  color: white;
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.status === StatusEnum.ALIVE ? "#6cac6c" : props.status === StatusEnum.DEAD ? 'red' : 'gray'};
`;

export const Text = styled.span`
  font-size: 18px;
  color: #5A5A5A;
`;

export const TextBold = styled(Text)`
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  gap: 5px;
`;