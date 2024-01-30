import "reflect-metadata";
import { injectable } from "inversify";
import axios from "axios";
import { PokemonListResponse } from "../entities/pokemon-entity";
export interface ApiDateService {
  fetch(): Promise<[]>;
}
export interface ApiTimeService {
  fetch(date?: string): Promise<[]>;
}
export interface PokemonService {
  getPokemon(): Promise<PokemonListResponse>;
}
@injectable()
export class ApiServiceDateScheduling implements ApiDateService {
  async fetch(): Promise<[]> {
    const response = await axios.get(
      `http://localhost:3000/api/scheduling/date`
    );
    return response.data;
  }
}

@injectable()
export class ApiServiceTimeScheduling implements ApiTimeService {
  async fetch(date?: string): Promise<[]> {
    const url = "http://localhost:3000/api/scheduling/time";
    const body = { date };
    const response = await axios.post(url, body);
    return response.data;
  }
}

@injectable()
export class ApiServicePokemon implements PokemonService {
  async getPokemon(): Promise<PokemonListResponse> {
    const response = await axios.get(`${process.env.NEXT_POKEMON_API}`);
    return response.data;
  }
}
