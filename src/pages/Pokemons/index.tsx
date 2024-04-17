import React from 'react';
import { FC } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { usePokemonData } from '../../hooks/usePokemonData';
import { L, Layout, P, T } from '../../components';
import { Select } from 'antd';

export const Pokemons: FC = React.memo(() => {
    const { pokemons, count, currentPage, pokemonType, handlePageChange, handleLimitChange, limitOptions, handleClear } = usePokemonData();
    const { inputValue, handleInputChange } = useDebounce('', 1000);

    return (
        <Layout>

            <L.TextField value={inputValue} onChange={handleInputChange} placeholder='search...' />
            <L.Wrapper>
                {pokemons.map((pokemon, index) => (
                    <L.Group key={index}>
                        <L.Title> {pokemon.name}</L.Title>
                        <L.Links to={`/pokemon/${pokemon.name}`}>Open</L.Links>
                    </L.Group>
                ))}
            </L.Wrapper>

            {pokemonType && (
                <T.Wrapper>
                    <T.Name>{pokemonType} </T.Name>
                    <T.Clear onClick={handleClear}>Clear</T.Clear>
                </T.Wrapper>
            )}

            <P.Wrapper>
                <P.Controll current={currentPage} total={count} onChange={handlePageChange} showSizeChanger={false} />
                {!pokemonType && (
                    <Select defaultValue={12} style={{ width: 120 }} onChange={handleLimitChange}>
                        {limitOptions.map((option) => (
                            <Select.Option key={option} value={option}>{option}</Select.Option>
                        ))}
                    </Select>
                )}
            </P.Wrapper>

        </Layout>
    );
});
