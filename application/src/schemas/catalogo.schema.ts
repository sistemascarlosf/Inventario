import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AreaDocument = Catalogo & Document;

@Schema()
export class Catalogo {
    @Prop()
    nombre: string;
    @Prop()
    path: string;
}

export const CatalogoSchema = SchemaFactory.createForClass(Catalogo);