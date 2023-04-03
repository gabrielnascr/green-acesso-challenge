import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectCharacter,
  selectLoading,
  selectModalOpen,
  selectResponseInfo,
  selectSearchQueries,
  selectSelectedCharacter,
} from "./characterSlice";

export const useCharacters = () => {
  const characters = useSelector(selectCharacter);
  const searchQueries = useSelector(selectSearchQueries);
  const responseInfo = useSelector(selectResponseInfo);
  const isLoading = useSelector(selectLoading);
  const characterModalOpen = useSelector(selectModalOpen);
  const selectedCharacter = useSelector(selectSelectedCharacter);

  return useMemo(
    () => ({
      characters,
      searchQueries,
      responseInfo,
      isLoading,
      characterModalOpen,
      selectedCharacter
    }),
    [characters, searchQueries, responseInfo, isLoading, characterModalOpen, selectedCharacter]
  );
};
