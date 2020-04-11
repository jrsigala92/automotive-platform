import { prop, Typegoose } from "typegoose";
import { Schema } from 'mongoose';
import { buildSchema } from '@typegoose/typegoose';

export abstract class BaseModel{

    id?: string;
    @prop()
    createdDate?: Date; // provided by timestamps
    @prop()
    updatedDate?: Date; // provided by timestamps
    
    static get schema(): Schema {
        return buildSchema(this as any, {
          timestamps: true,
          toJSON: {
            getters: true,
            virtuals: true,
          },
        });
      }
    
      static get modelName(): string {
        return this.name;
      }
}