import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RazonSocialDto } from "src/dto/razon_social.dto";
import { RazonSocial } from "src/schemas/razon_social.schema";
@Injectable()
export class RazonSocialService{
    constructor(@InjectModel(RazonSocial.name) private readonly razonSocialModel : Model<RazonSocialDto>){}
    
    async create(razonSocialDto : RazonSocialDto ){
        const newUsuario = new this.razonSocialModel(razonSocialDto);
        await newUsuario.save();
    }

    findAll(){
        return this.razonSocialModel.find().exec();
    }
    async update(id,updateRazonSocialDto){
        return this.razonSocialModel.findByIdAndUpdate(id,updateRazonSocialDto);
    }
    
    async remove(id){
        await this.razonSocialModel.findByIdAndRemove(id);
    }

}