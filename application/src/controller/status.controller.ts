import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { StatusDto } from "src/dto/status.dto";
import { StatusService } from "src/services/status.service";

@Controller('status')
export class StatusController{

    constructor(private readonly statusService: StatusService){}

    @Get()
    findAll(){
        return this.statusService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() statusDto: StatusDto){
        await this.statusService.create(statusDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() statusDto: StatusDto ): Promise<any>{
        return this.statusService.update(id,statusDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.statusService.remove(id);
    }
}