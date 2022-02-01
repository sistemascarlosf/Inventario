import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UnidadNegocioDto } from "src/dto/unidad_negocio.dto";
import { Model } from "mongoose";
import { UnidadNegocio } from "src/schemas/unidad_negocio.schema";

@Injectable()
export class UnidadNegocioService{
    constructor(@InjectModel(UnidadNegocio.name) private readonly unidadNegocioModel : Model<UnidadNegocioDto>
    ){}

    async create(unidadNegocioDto : UnidadNegocioDto ){
        const newUnidadNegocio = new this.unidadNegocioModel(unidadNegocioDto);
        await newUnidadNegocio.save();
    }

    findAll(){
        return this.unidadNegocioModel.find().exec();
    }
    async update(id,unidadNegocioDto){
        return this.unidadNegocioModel.findByIdAndUpdate(id,unidadNegocioDto);
    }
    
    async remove(id){
        await this.unidadNegocioModel.findByIdAndRemove(id);
    }
}