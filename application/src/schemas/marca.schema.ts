import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';

export type MarcaDocument = Marca & Document;

@Schema()
export class Marca {
    @Prop()
    nombre: string;
}


export const MarcaSchema = SchemaFactory.createForClass(Marca);