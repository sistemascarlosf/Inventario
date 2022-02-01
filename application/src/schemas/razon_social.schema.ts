import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';
export type RazonSocialDocument = RazonSocial & Document;
@Schema()
export class RazonSocial{
    @Prop()
    nombre : string;

    @Prop()
    rfc: string;
}

export const RazonSocialSchema = SchemaFactory.createForClass(RazonSocial);