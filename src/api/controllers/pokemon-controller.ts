import { inject, injectable } from "inversify";
import { PokemonEntity } from "../entities/pokemon-entity";
import type { PokemonUseCase } from "../useCases/pokemon-use-cases";

export class PokemonController {
  constructor(
    @inject("PokemonUseCase")
    private pokemonUseCase: PokemonUseCase
  ) {}

  async getPokemon(): Promise<PokemonEntity[]> {
    return this.pokemonUseCase.getPokemon();
  }
}