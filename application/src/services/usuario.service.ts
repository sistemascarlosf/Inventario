import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUsuarioDto } from "src/dto/usuario.dto";
import { Usuario } from "src/schemas/usuario.schema";
import * as cargoservice from './cargo.service';

@Injectable()
export class UsuarioService{
    constructor(@InjectModel(Usuario.name) private readonly usuarioModel : Model<CreateUsuarioDto>
    ){}

    async create(createUsuarioDto : CreateUsuarioDto ){
        const newUsuario = new this.usuarioModel(createUsuarioDto);
        await newUsuario.save();
    }

    findAll(){
        return this.usuarioModel.aggregate(
            [
                {
                    $lookup:{
                        from:'cargo',
                        localField:'cargo',
                        foreignField:'_id',
                        as:'cargo'
                    }
                },
                {
                    $unwind:'$cargo'     
                },
                
        {
            $project:{
                nombre:1,cargo_id:'$cargo._id', cargo_nombre:'$cargo.nombre'
                }
            }
            ]
        )
        
        .exec();
    }
    async update(id,updateCargoDto){
        return this.usuarioModel.findByIdAndUpdate(id,updateCargoDto);
    }
    
    async remove(id){
        await this.usuarioModel.findByIdAndRemove(id);
    }
}