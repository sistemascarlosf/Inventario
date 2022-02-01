import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';

export type UnidadNegocioDocument = UnidadNegocio & Document;

@Schema()
export class UnidadNegocio {
    @Prop()
    nombre: string;

    @Prop()
    localidad: String;
}


export const UnidadNegocioSchema = SchemaFactory.createForClass(UnidadNegocio);