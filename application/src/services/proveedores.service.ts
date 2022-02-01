import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProveedoresDto } from "src/dto/proveedores.dto";
import { Proveedores } from "src/schemas/proveedores.schema";

@Injectable()
export class ProveedoresService{
    constructor(@InjectModel(Proveedores.name) readonly proveedoresModel : Model<ProveedoresDto>){}

    create(crearProveedor : ProveedoresDto) {
        const newProveedor = new this.proveedoresModel(crearProveedor);
        return newProveedor.save();
    }
    findAll(){
        return this.proveedoresModel.find().exec();
    }
    update(id:string, proveedoresDto){
        return this.proveedoresModel.findByIdAndUpdate(id,proveedoresDto);
    }
    
    async remove(id){
        await this.proveedoresModel.findByIdAndRemove(id);
    }
}