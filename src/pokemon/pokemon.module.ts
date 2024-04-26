import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      //*Definimos nuestro modelo db
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),
  ],
  exports: [MongooseModule], //* De lo q esta dentro de mi modulo lo que quiero exportar
})
export class PokemonModule {}
