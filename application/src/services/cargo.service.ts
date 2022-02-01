import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCargoDto } from "src/dto/cargo.dto";
import { Cargo } from "src/schemas/cargo.schema";



@Injectable()
export class CargoService{
    constructor(@InjectModel(Cargo.name) private readonly cargoModel : Model<CreateCargoDto>
    ){}

    create(createCargoDto : CreateCargoDto ){
        console.log(createCargoDto);
        const createCargo = new this.cargoModel(createCargoDto);
        console.log(createCargo);
        return createCargo.save();
    }

    findAll(): Promise<Cargo[]>{
        return this.cargoModel.find().exec();
    }
    
    findOne(): Promise<Cargo[]>{
        return this.cargoModel.find().exec();
    }

    async update(id,updateCargoDto){
        return this.cargoModel.findByIdAndUpdate(id,updateCargoDto);
    }
    
    async remove(id){
        await this.cargoModel.findByIdAndRemove(id);
    }
}