import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { AsignacionDto } from "src/dto/asignacion.dto";
import { AsignacionService } from "src/services/asignacion.service";

@Controller('asignacion')
export class AsignacionController{

    constructor(private readonly asignacionService: AsignacionService){}

    @Get()
    findAll(){
        return this.asignacionService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() asignacionDto: AsignacionDto){
        await this.asignacionService.create(asignacionDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() asignacionDto: AsignacionDto ): Promise<any>{
        return this.asignacionService.update(id,asignacionDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) : Promise<any>{
        return this.asignacionService.remove(id);
    }
}