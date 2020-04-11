import { BaseModel } from '../../shared/base-model';
import { prop, Typegoose } from '@typegoose/typegoose';

export  class CarType extends BaseModel{

     @prop()
     name: string;            
}
