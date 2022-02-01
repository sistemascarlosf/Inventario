import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';

export type TipoEquipoDocument = TipoEquipo & Document;

@Schema()
export class TipoEquipo {
    @Prop()
    nombre: string;
}


export const TipoEquipoSchema = SchemaFactory.createForClass(TipoEquipo);
