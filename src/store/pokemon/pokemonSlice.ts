import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemonByDetails } from './actions';
import { byDetailsResponse } from './actions/types';
import { PokemonState } from './types';

const initialState: PokemonState = {
  isLoading: false,
  error: null,
  details: null,
};

const pokemonReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPokemonByDetails.fulfilled, (state, action: PayloadAction<byDetailsResponse>) => {
      state.isLoading = false;
      state.details = action.payload;
    });
    builder.addCase(fetchPokemonByDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Failed to fetch pokemons';
    });
  },
});

export default pokemonReducer.reducer;