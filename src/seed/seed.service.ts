import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable() //* Para que este servicio sea injectable se debe decorar con el Injectable
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) //* Inyectar el modelo(Modelo.name) para tener acceso a las props de nuestro entity.
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemons = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      return { name, no };
    });

    await this.pokemonModel.insertMany(pokemons);
    return 'Seed executed';
  }
}
