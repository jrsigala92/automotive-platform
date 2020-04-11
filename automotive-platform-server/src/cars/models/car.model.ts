import { BaseModel } from '../../shared/base-model';
import { Expose } from 'class-transformer';
import { prop, Typegoose } from '@typegoose/typegoose';

export  class Car extends BaseModel{

     @prop()
     name: string;

     @prop()     
     description: string;

     @prop()     
     year: number;             
}
