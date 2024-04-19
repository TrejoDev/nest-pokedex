import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {} //PartialType => tiene accseso a todas las properties de CreateDto, pero son opcionales
