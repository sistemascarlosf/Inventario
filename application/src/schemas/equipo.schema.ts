import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';
import { TipoEquipo } from "./tipo_equipo.schema";
import { Marca } from "./marca.schema";
import { RazonSocial } from "./razon_social.schema";
import { Accesorios } from "./accesorios.schema";

export type EquipoDocument = Equipo & Document;

@Schema()
export class Equipo{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: TipoEquipo.name})
    tipo_equipo: TipoEquipo;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Marca.name})
    marca: Marca;

    @Prop()
    numero_serie:string;

    @Prop([{type: mongoose.Schema.Types.ObjectId, ref: Accesorios.name}])
    accesorios: Accesorios[];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: RazonSocial.name})
    razon_social: RazonSocial;

    @Prop()
    nombre_equipo: string;

    @Prop()
    mac_address: string;

    @Prop()
    contrasena: string;

    @Prop()
    modelo: string;

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
    sistema_operativo: string;

    @Prop()
    version_office: string;

    @Prop()
    fecha_baja: string;

    @Prop()
    status: string;
    
}

export const EquipoSchema = SchemaFactory.createForClass(Equipo);