export interface PokemonState {
    pokemons: Pokemon[];
    count: number;
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    limit: number;
    pokemonType: string | undefined;
}

export interface Pokemon {
    name: string;
    url: string;
}