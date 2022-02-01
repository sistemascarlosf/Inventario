import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type CargoDocument = Cargo & Document;

@Schema()
export class Cargo {
    @Prop({required:true})
    nombre: String;
}



export const CargoSchema = SchemaFactory.createForClass(Cargo);
