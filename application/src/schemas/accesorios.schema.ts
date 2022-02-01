import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { Cargo } from './cargo.schema';
import { TipoAccesorio } from "./tipo_accesorio.schema";
import { Proveedores } from "./proveedores.schema";
import { Status } from "./status.schema";

export type AccesoriosDocument = Accesorios & Document;

@Schema()
export class Accesorios {
    
    @Prop({type : mongoose.Schema.Types.ObjectId, ref: TipoAccesorio.name})
    tipo_accesorio: TipoAccesorio;

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: Proveedores.name})
    proveedores: Proveedores;

    @Prop()
    modelo: string;

    @Prop()
    numero_serie: string;

    @Prop()
    fecha_compra: string;

    @Prop()
    subtotal: string;

    @Prop()
    iva: string;

    @Prop()
    total: string;

    @Prop()
    numero_factura: string;

    @Prop()
    ultimo_mantenimiento: string;

    @Prop()
    fecha_baja: string;

    @Prop()
    capacidad: string;

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: Status.name})
    status: Status;
}



export const AccesoriosSchema = SchemaFactory.createForClass(Accesorios);