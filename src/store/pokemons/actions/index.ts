import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithHeaders } from '../../api/apiConfig';
import { RootState } from '../../store';
import { byUrlResponse } from './types';

export const fetchPokemon = createAsyncThunk<byUrlResponse, void, { state: RootState }>(
  'pokemon/fetchPokemon',
  async (_, { getState }) => {
    try {
      const { currentPage, limit } = getState().pokemonsReducer;
      const offset = (currentPage - 1) * limit;

      const pokemons = await getWithHeaders<byUrlResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
      return pokemons;
    } catch (error) {
      throw new Error('Failed to fetch pokemons');
    }
  }
);


export const fetchPokemonByUrls = async (url: string) => {
  try {
    const response = await getWithHeaders<byUrlResponse>(url);
    return response;
  } catch (error) {
    throw new Error('Failed to fetch pokemon');
  }
};

export const fetchPokemonByType = createAsyncThunk<byUrlResponse[], void, { state: RootState }>(
  'pokemon/fetchPokemonByType',
  async (_, { getState }) => {
    try {
      const { pokemonType } = getState().pokemonsReducer;
      const { pokemons } = getState().pokemonsReducer;

      if (!pokemonType) {
        return [];
      }

      const pokemonResponses = await Promise.all(pokemons.map(pokemon => fetchPokemonByUrls(pokemon.url)));

      const filtered = pokemonResponses.filter(pokemon => {
        return pokemon?.types.some(type => type.type.name === pokemonType);
      });

      return filtered;
    } catch (error) {
      throw new Error('Failed to fetch pokemons');
    }
  }
);