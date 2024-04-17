import { useEffect } from 'react';
import { usePagination } from './usePagination';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchPokemon, fetchPokemonByType } from '../store/pokemons/actions';
import { setClear } from '../store/pokemons/pokemonsSlice';

export const usePokemonData = () => {
    const dispatch = useAppDispatch();
    const { pokemons, count, currentPage, limit, pokemonType } = useAppSelector((state) => state.pokemonsReducer);
    const { handlePageChange, handleLimitChange, limitOptions } = usePagination();

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch, currentPage, limit]);

    useEffect(() => {
        dispatch(fetchPokemonByType());
    }, [dispatch, pokemonType]);

    const handleClear = () => {
        dispatch(setClear());
        dispatch(fetchPokemon());
    };

    return {
        pokemons,
        count,
        currentPage,
        limit,
        pokemonType,
        handlePageChange,
        handleLimitChange,
        limitOptions,
        handleClear
    };
};
