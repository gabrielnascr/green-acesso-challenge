import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchQuery } from "./characterSlice";
import { RickMortyService } from "@/services";

const findCharacters = createAsyncThunk('findCharacters', async ({ name, gender, status, page }: SearchQuery) => {
    const { data } = await RickMortyService.get(`/character?page=${page}&name=${name}&status=${status}&gender=${gender}`)

    return data;
});

export { findCharacters }