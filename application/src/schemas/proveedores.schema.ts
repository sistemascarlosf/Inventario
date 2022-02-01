import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ProveedoresDocument = Proveedores & Document;

@Schema()
export class Proveedores{
    @Prop()
    nombre: string;
    
    @Prop()
    rfc: string;
}
export const ProveedoresSchema = SchemaFactory.createForClass(Proveedores);