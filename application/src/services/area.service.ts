import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AreaDto } from "src/dto/area.dto";
import { Area } from "src/schemas/area.schema";

@Injectable()
export class AreaService{
    constructor(@InjectModel(Area.name) private readonly areaModel : Model<AreaDto>
    ){}

    async create(areaDto : AreaDto ){
        const newArea = new this.areaModel(areaDto);
        await newArea.save();
    }

    findAll(){
        return this.areaModel.find().exec();
    }
    async update(id,areaDto){
        return this.areaModel.findByIdAndUpdate(id,areaDto);
    }
    
    async remove(id){
        await this.areaModel.findByIdAndRemove(id);
    }
}