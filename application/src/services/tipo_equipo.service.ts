import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TipoEquipoDto } from "src/dto/tipo_equipo.dto";
import { TipoEquipo } from "src/schemas/tipo_equipo.schema";


@Injectable()
export class TipoEquipoService{
    constructor(@InjectModel(TipoEquipo.name) private readonly tipoEquipoModel : Model<TipoEquipoDto>
    ){}

    async create(tipoEquipoDto : TipoEquipoDto ){
        const newUsuario = new this.tipoEquipoModel(tipoEquipoDto);
        await newUsuario.save();
    }

    findAll(){
        return this.tipoEquipoModel.find().exec();
    }
    async update(id,tipoEquipoDto){
        return this.tipoEquipoModel.findByIdAndUpdate(id,tipoEquipoDto);
    }
    
    async remove(id){
        await this.tipoEquipoModel.findByIdAndRemove(id);
    }
}