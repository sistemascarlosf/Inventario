import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { Cargo } from './cargo.schema';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
    @Prop()
    nombre: string;

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: Cargo.name})
    cargo: Cargo;
}


export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
