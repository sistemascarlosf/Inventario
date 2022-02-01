import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { AreaDto } from "src/dto/area.dto";
import { AreaService } from "src/services/area.service";

@Controller('area')
export class AreaController{

    constructor(private readonly areaService: AreaService){}

    @Get()
    findAll(){
        return this.areaService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() areaDto: AreaDto){
        await this.areaService.create(areaDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() AreaDto: AreaDto ): Promise<any>{
        return this.areaService.update(id,AreaDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.areaService.remove(id);
    }
}