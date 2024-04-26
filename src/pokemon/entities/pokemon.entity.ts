import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Injectable()
@Schema() //Indica esquema de DB
export class Pokemon extends Document {
  // id: Lo da mongo
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
