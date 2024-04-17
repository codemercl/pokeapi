import { useCallback } from 'react';
import { useAppDispatch } from './redux';
import { setCurrentPage, setLimitPage } from '../store/pokemons/pokemonsSlice';

export const usePagination = () => {
    const dispatch = useAppDispatch();

    const handlePageChange = useCallback((page: number) => {
        dispatch(setCurrentPage(page));
    }, [dispatch]);

    const handleLimitChange = useCallback((value: number) => {
        dispatch(setLimitPage(value));
    }, [dispatch]);

    const limitOptions = Array.from({ length: 9 }, (_, index) => index + 12);

    return {
        handlePageChange,
        handleLimitChange,
        limitOptions
    };
};
