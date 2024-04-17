import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithHeaders } from '../../api/apiConfig';
import { RootState } from '../../store';
import { byDetailsResponse } from './types';

export const fetchPokemonByDetails = createAsyncThunk<byDetailsResponse, string, { state: RootState }>(
  'pokemon/fetchPokemonByDetails',
  async (name: string | undefined, _thunkAPI) => {
    try {
      const pokemons = await getWithHeaders<byDetailsResponse>(`/pokemon/${name}`);
      return pokemons;
    } catch (error) {
      throw new Error('Failed to fetch pokemons');
    }
  }
);