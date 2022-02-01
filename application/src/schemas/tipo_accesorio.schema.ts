import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';


export type TipoAccesorioDocument = TipoAccesorio & Document;

@Schema()
export class TipoAccesorio {
    @Prop()
    nombre: string;
}


export const TipoAccesorioSchema = SchemaFactory.createForClass(TipoAccesorio);