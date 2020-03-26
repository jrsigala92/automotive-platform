import { Document } from "mongoose";

export interface Car extends Document {
    name: string;
    year: number;
    description: string;
}