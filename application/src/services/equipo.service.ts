import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EquipoDto } from "src/dto/equipo.dto";
import { Equipo } from "src/schemas/equipo.schema";

@Injectable()
export class EquipoService{
    constructor(@InjectModel(Equipo.name) private readonly equipoModel : Model<EquipoDto>
    ){}

    async create(equipoDto : EquipoDto ){
        const newEquipo = new this.equipoModel(equipoDto);
        await newEquipo.save();
    }

    //agregar  populate('accesorios') cuando este creado el modelo
    findAll(){
        return this.equipoModel.find().
        populate('tipo_equipo').
        populate('marca').
        populate('accesorios').
        populate('razon_social').
        exec();
    }
    async update(id,equipoDto){
        return this.equipoModel.findByIdAndUpdate(id,equipoDto);
    }
    
    async remove(id){
        await this.equipoModel.findByIdAndRemove(id);
    }
}