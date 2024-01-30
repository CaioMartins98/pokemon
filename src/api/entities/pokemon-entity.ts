type PokemonEntityProps = {
  name: string;
};

export class PokemonEntity {
  name: string;
  constructor(pokemon: PokemonEntityProps) {
    this.name = pokemon.name;
  }
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonEntityProps[];
}

