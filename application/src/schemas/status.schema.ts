import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document} from 'mongoose';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
    @Prop()
    nombre: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
