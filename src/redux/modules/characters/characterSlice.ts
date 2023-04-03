import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { findCharacters } from './characterService';

export type Character = {
  name: string;
  image: string;
  origin: {
    name: string;
  },
  location: {
    name: string,
  },
  status: StatusEnum;
  gender: GenderEnum;
}

export enum StatusEnum {
  ALIVE = 'Alive',
  DEAD = 'Dead', 
}

export enum GenderEnum {
  FEMALE = 'Female',
  MALE = 'Male',
}

export type SearchQuery = {
  name?: string;
  gender?: GenderEnum | string;
  status?: StatusEnum | string;
  species?: string;
  page?: number;
}

interface RequestInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface CharacterState {
  characters: Character[],
  searchQueries: SearchQuery;
  loading: boolean;
  responseInfo?: RequestInfo;
  selectedCharacter: Character;
  characterModalOpen: boolean;
}

const initialState: CharacterState = {
  characters: [],
  searchQueries: {
    page: 1,
    gender: '',
    name: '',
    status: '',
  } as SearchQuery,
  loading: true,
  characterModalOpen: false,
  selectedCharacter: {} as Character,
}

const characterSlice = createSlice({
  name: 'characterSlice',
  initialState: initialState,
  reducers: {
    setCharacters: (state, { payload:  characters }: PayloadAction<Character[]>) => {
      state.characters = {
        ...characters
      }
    },
    setFilter: (state, { payload: filters }: PayloadAction<SearchQuery>) => {
      state.searchQueries = {
        ...state.searchQueries,
        ...filters
      }
    },
    setCharacter: (state, { payload: character }: PayloadAction<Character>) => {
      state.selectedCharacter = character
    },
    setModal: (state, { payload }) => {
      state.characterModalOpen = payload
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(findCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.results;
      state.responseInfo = action.payload.info;
      state.loading = false;
    }),
    builder.addCase(findCharacters.pending, (state, action) => {
      state.responseInfo = {} as RequestInfo
      state.characters = [];

      state.loading = true;
    }),
    builder.addCase(findCharacters.rejected, (state, action) => {
      state.loading = false;

      state.responseInfo = {} as RequestInfo
      state.characters = [];
    })
  }
})

export const { setCharacters, setFilter, setCharacter, setModal } = characterSlice.actions;

export const selectCharacter = (state: RootState) => state.character.characters;
export const selectSearchQueries = (state: RootState) => state.character.searchQueries;
export const selectLoading = (state: RootState) => state.character.loading;
export const selectResponseInfo = (state: RootState) => state.character.responseInfo;
export const selectModalOpen = (state: RootState) => state.character.characterModalOpen;
export const selectSelectedCharacter = (state: RootState) => state.character.selectedCharacter;

export default characterSlice.reducer;
