import { BaseModel } from '../../models/base-model';
import { Expose } from 'class-transformer';
import { schemaOptions } from '../../models/schema-options';
import { prop, Typegoose } from '@typegoose/typegoose';

export  class Car extends BaseModel{

     @prop()
     name: string;

     @prop()     
     description: string;

     @prop()     
     year: number;             
}
