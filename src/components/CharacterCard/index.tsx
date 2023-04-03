import React, { useEffect } from "react";
import {
  CharacterAvatar,
  CharacterName,
  Container,
  LocationAtText,
  LocationText,
  Row,
} from "./styles";
import {
  Character,
  GenderEnum,
  StatusEnum,
  setCharacter,
  setModal,
} from "@/redux/modules/characters/characterSlice";
import { useAppDispatch } from "@/redux";

interface CardProps {
  character: Character;
}

export default function CharacterCard({
  character,
}: CardProps) {
  const { name, image, origin, gender, location, status } = character

  const dispatch = useAppDispatch();

  return (
    <Container
      onClick={() => {
        dispatch(setModal(true));
        dispatch(
          setCharacter(character)
        );
      }}
    >
      <Row>
        <CharacterAvatar src={image} />
        <CharacterName>{name}</CharacterName>
      </Row>
      <Row>
        <LocationAtText>Localização:</LocationAtText>
        <LocationText>{location.name}</LocationText>
      </Row>
    </Container>
  );
}
