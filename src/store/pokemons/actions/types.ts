import { Pokemon } from "../types";

export interface FetchPokemonsParams {
    limit: number;
    offset: number;
}

export interface byUrlResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}