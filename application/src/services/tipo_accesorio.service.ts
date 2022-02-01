import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TipoAccesorioDto } from "src/dto/tipo_accesorio.dto";
import { TipoAccesorio } from "src/schemas/tipo_accesorio.schema";

@Injectable()
export class TipoAccesorioService{
    constructor(@InjectModel(TipoAccesorio.name) private readonly tipoAccesorioModel : Model<TipoAccesorioDto>
    ){}

    async create(tipoAccesorioDto : TipoAccesorioDto ){
        const newTipoAccesorio = new this.tipoAccesorioModel(tipoAccesorioDto);
        await newTipoAccesorio.save();
    }

    findAll(){
        return this.tipoAccesorioModel.find().exec();
    }
    async update(id,tipoAccesorioDto){
        return this.tipoAccesorioModel.findByIdAndUpdate(id,tipoAccesorioDto);
    }
    
    async remove(id){
        await this.tipoAccesorioModel.findByIdAndRemove(id);
    }
}