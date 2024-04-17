import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from './pokemons/pokemonsSlice';
import pokemonReducer from './pokemon/pokemonSlice';

const rootReducer = combineReducers({
    pokemonsReducer,
    pokemonReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

