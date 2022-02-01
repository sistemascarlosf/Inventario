import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { Equipo } from "./equipo.schema";
import { Usuario } from "./usuario.schema";
import { UnidadNegocio } from "./unidad_negocio.schema";
import { Area } from "./area.schema";

export type AsignacionDocument = Asignacion & Document;

@Schema()
export class Asignacion {
    @Prop({type : mongoose.Schema.Types.ObjectId, ref: Usuario.name})
    usuario: Usuario;

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: Equipo.name})
    equipo: Equipo[];

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: UnidadNegocio.name})
    unidad_negocio: UnidadNegocio;

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: Area.name})
    area: Area;
}

export const AsignacionSchema = SchemaFactory.createForClass(Asignacion);
