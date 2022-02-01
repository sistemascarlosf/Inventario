import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AccesoriosDto } from "src/dto/accesorios.dto";
import { Accesorios } from "src/schemas/accesorios.schema";


@Injectable()
export class AccesoriosService{
    constructor(@InjectModel(Accesorios.name) private readonly usuarioModel : Model<AccesoriosDto>
    ){}

    async create(accesoriosDto : AccesoriosDto ){
        const newUsuario = new this.usuarioModel(accesoriosDto);
        await newUsuario.save();
    }
    //se agrega el campo a extraer de la tabla concatenada
    findAll(){
        return this.usuarioModel.find().
        populate('tipo_accesorio','nombre').
        populate('proveedores','nombre').
        populate('status','nombre').
        exec();
    }
    //se agrega el campo a obtener unicamente de la tabla
    findOne(_id){
        return this.usuarioModel.findById(_id).
        populate('tipo_accesorio','nombre').
        populate('proveedores','nombre').
        populate('status','nombre').
        exec();
    }
    async update(id,accesoriosDto){
        return this.usuarioModel.findByIdAndUpdate(id,accesoriosDto);
    }
    
    async remove(id){
        await this.usuarioModel.findByIdAndRemove(id);
    }
}