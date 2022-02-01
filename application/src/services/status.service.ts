import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { StatusDto} from "src/dto/status.dto";
import { Status } from "src/schemas/status.schema";


@Injectable()
export class StatusService{
    constructor(@InjectModel(Status.name) private readonly statusModel : Model<StatusDto>
    ){}

    async create(statusDto : StatusDto ){
        const newStatus = new this.statusModel(statusDto);
        await newStatus.save();
    }

    findAll(){
        return this.statusModel.find().exec();
    }
    async update(id,statusDto){
        return this.statusModel.findByIdAndUpdate(id,statusDto);
    }
    
    async remove(id){
        await this.statusModel.findByIdAndRemove(id);
    }
}