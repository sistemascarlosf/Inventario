import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MarcaDto } from "src/dto/marca.dto";
import { Marca } from "src/schemas/marca.schema";

@Injectable()
export class MarcaService{
    constructor(@InjectModel(Marca.name) private readonly marcaModel : Model<MarcaDto>
    ){}

    async create(marcaDto : MarcaDto ){
        const newUsuario = new this.marcaModel(marcaDto);
        await newUsuario.save();
    }

    findAll(){
        return this.marcaModel.find().exec();
    }
    async update(id,updateCargoDto){
        return this.marcaModel.findByIdAndUpdate(id,updateCargoDto);
    }
    
    async remove(id){
        await this.marcaModel.findByIdAndRemove(id);
    }
}