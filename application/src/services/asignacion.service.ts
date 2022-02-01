import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AsignacionDto } from "src/dto/asignacion.dto";
import { Asignacion } from "src/schemas/asignacion.schema";


@Injectable()
export class AsignacionService{
    constructor(@InjectModel(Asignacion.name) private readonly asignacionModel : Model<AsignacionDto>
    ){}

    async create(asignacionDto : AsignacionDto ){
        const newAsignacion = new this.asignacionModel(asignacionDto);
        await newAsignacion.save();
    }

    findAll(){
        return this.asignacionModel.find().
        populate('usuario').
        populate('equipo').
        populate('unidad_negocio').
        populate('area').
        exec();
    }
    async update(id,asignacionDto){
        return this.asignacionModel.findByIdAndUpdate(id,asignacionDto);
    }
    
    async remove(id){
        await this.asignacionModel.findByIdAndRemove(id);
    }
}