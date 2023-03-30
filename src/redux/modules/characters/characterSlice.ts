import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Character = {}

export type SearchQuery = {}

interface CharacterState {
  characters: Character[],
  searchQueries: SearchQuery;
}

const initialState: CharacterState = {
  characters: [],
  searchQueries: {} as SearchQuery,
}

const characterSlice = createSlice({
  name: 'characterSlice',
  initialState: initialState,
  reducers: {
    setCharacters: (state, { payload:  characters }: PayloadAction<Character[]>) => {},
    setFilter: (state, { }) => {}
  },
  extraReducers: (builder) => {}
})

export const { setCharacters, setFilter } = characterSlice.actions;

export default characterSlice.reducer;
