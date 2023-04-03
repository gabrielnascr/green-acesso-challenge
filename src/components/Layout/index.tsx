/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect } from "react";
import { CharacterWrapper, CharactersBox, Container, NotFound } from "./styles";
import Header from "../Header";
import Filter from "../Filter";
import CharacterCard from "../CharacterCard";
import Pagination from "../Pagination";
import { useCharacters } from "@/redux/modules/characters/useCharacters";
import { useAppDispatch } from "@/redux";
import { findCharacters } from "@/redux/modules/characters/characterService";
import CharacterCardSkeleton from "../Skeleton/Search/CharacterCard";
import CharacterModal from "../Modal/CharacterModal";

export default function Layout() {
  const { searchQueries, characters, isLoading, characterModalOpen, selectedCharacter } =
    useCharacters();

  const dispatch = useAppDispatch();

  const getCharacters = useCallback(async () => {
    await dispatch(
      findCharacters({
        page: searchQueries.page,
        gender: searchQueries.gender,
        name: searchQueries.name,
        status: searchQueries.status,
      })
    );
  }, [
    dispatch,
    searchQueries.page,
    searchQueries.gender,
    searchQueries.name,
    searchQueries.status,
  ]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <>
      <CharacterModal character={selectedCharacter} isOpen={characterModalOpen} />
      <Container>
        <Header />
        <Filter />
        <CharactersBox>
          <CharacterWrapper>
            {isLoading && <CharacterCardSkeleton repeatTimes={10} />}
            {characters.map((character) => (
              <CharacterCard
                character={character}
              />
            ))}
            {!isLoading && characters.length === 0 && (
              <NotFound>Não encontramos nenhum resultado {`:(`}</NotFound>
            )}
          </CharacterWrapper>
          <Pagination />
        </CharactersBox>
      </Container>
    </>
  );
}
