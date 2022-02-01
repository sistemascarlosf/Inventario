import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';
import * as mongoose from 'mongoose';

export type AreaDocument = Area & Document;

@Schema()
export class Area {
    @Prop()
    nombre: string;
}


export const AreaSchema = SchemaFactory.createForClass(Area);