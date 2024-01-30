import { inject } from "inversify";
import { PokemonEntity } from "../entities/pokemon-entity";
import { ApiServicePokemon } from "../service/api-service";

export interface PokemonUseCase {
  getPokemon(): Promise<PokemonEntity[]>;
}

export class ImplPokemonUseCase implements PokemonUseCase {
  constructor(
    @inject("ApiServicePokemon")
    private pokemonService: ApiServicePokemon
  ) {}

  async getPokemon(): Promise<PokemonEntity[]> {
    const pokemonData = await this.pokemonService.getPokemon();

    return pokemonData.results.map((pokemon) => new PokemonEntity(pokemon));
  }
}
