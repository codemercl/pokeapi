export interface PokemonState {
  isLoading: boolean;
  error: string | null;
  details: PokemonDetails | null;
}

export interface PokemonDetails {
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  moves: PokemonMove[];
}

export type PokemonSprites = {
  front_default: string;
}

export type PokemonType = {
  type: {
    name: string;
  };
}

export type PokemonMove = {
  move: {
    name: string;
  };
}