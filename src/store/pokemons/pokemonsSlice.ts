import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemonByType, fetchPokemon } from './actions';
import { byUrlResponse } from './actions/types';
import { PokemonState } from './types';

const initialState: PokemonState = {
  pokemons: [],
  count: 0,
  isLoading: false,
  error: null,
  currentPage: 1,
  limit: 12,
  pokemonType: "",
};

const pokemonsReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setLimitPage(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setPokemonType(state, action: PayloadAction<string>) {
      state.pokemonType = action.payload;
    },
    setClear(state) {
      state.pokemonType = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<byUrlResponse>) => {
      state.isLoading = false;
      state.pokemons = action.payload.results;
      state.count = action.payload.count;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Failed to fetch pokemons';
    });

    builder.addCase(fetchPokemonByType.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPokemonByType.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.pokemons = action.payload
      state.count = action.payload.count;
    });
    builder.addCase(fetchPokemonByType.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Failed to fetch pokemons';
    });
  },
});

export default pokemonsReducer.reducer;
export const { setCurrentPage, setLimitPage, setPokemonType, setClear } = pokemonsReducer.actions;