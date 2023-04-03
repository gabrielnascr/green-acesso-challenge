import React, { useEffect } from "react";
import ModalBase from "..";
import {
  Character,
  StatusEnum,
  setModal,
} from "@/redux/modules/characters/characterSlice";
import {
  CharacterAvatar,
  CharacterName,
  Container,
  Row,
  StatusContainer,
  Text,
  TextBold,
} from "./styles";
import { MdClose } from "react-icons/md";
import { useAppDispatch } from "@/redux";
import { useCharacters } from "@/redux/modules/characters/useCharacters";

interface CharacterModalProps {
  isOpen: boolean;
  character: Character;
}

export default function CharacterModal({
  isOpen,
  character,
}: CharacterModalProps) {
  const dispatch = useAppDispatch();

  const { selectedCharacter } = useCharacters();

  useEffect(() => {
    if (document) {
      const rootElement = document.getElementById('root');

      if (rootElement && isOpen) {
        rootElement.style.overflowY = 'hidden';
      }

      if (rootElement && !isOpen) {
        rootElement.style.overflowY = 'scroll';
      }
    }
  }, [isOpen])

  return isOpen ? (
    <ModalBase>
      <MdClose
        onClick={() => dispatch(setModal(false))}
        size={24}
        style={{ right: 16, position: "absolute", cursor: "pointer" }}
      />
      <Container>
        <CharacterName>{selectedCharacter.name}</CharacterName>
        <CharacterAvatar src={selectedCharacter.image} />
        <StatusContainer status={selectedCharacter.status}>
          {selectedCharacter.status === StatusEnum.ALIVE
            ? "Vivo"
            : selectedCharacter.status === StatusEnum.DEAD
            ? "Morto"
            : "Indefinido"}
        </StatusContainer>
        <Row>
          <TextBold>Gênero:</TextBold>
          <Text>{selectedCharacter.gender}</Text>
        </Row>
        <Row>
          <TextBold>Localização:</TextBold>
          <Text>{selectedCharacter.location.name}</Text>
        </Row>
        <Row>
          <TextBold>Origem:</TextBold>
          <Text>{selectedCharacter.origin.name}</Text>
        </Row>
      </Container>
    </ModalBase>
  ) : (
    <></>
  );
}
