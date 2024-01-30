import "reflect-metadata";
import { Container } from "inversify";
import {
  ApiDateService,
  ApiServiceDateScheduling,
  ApiServicePokemon,
  ApiServiceTimeScheduling,
  ApiTimeService,
  PokemonService,
} from "./src/api/service/api-service";
import {
  ImplPokemonUseCase,
  PokemonUseCase,
} from "./src/api/useCases/pokemon-use-cases";
import { PokemonController } from "./src/api/controllers/pokemon-controller";

const container = new Container();

container
  .bind<ApiDateService>("ApiServiceDateScheduling")
  .to(ApiServiceDateScheduling);

container
  .bind<ApiTimeService>("ApiServiceTimeScheduling")
  .to(ApiServiceTimeScheduling);

container.bind<PokemonService>("ApiServicePokemon").to(ApiServicePokemon);
container.bind<PokemonUseCase>("PokemonUseCase").to(ImplPokemonUseCase);
container.bind<PokemonController>("PokemonController").to(PokemonController);

export { container };