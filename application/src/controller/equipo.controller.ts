import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { EquipoDto } from "src/dto/equipo.dto";
import { EquipoService } from "src/services/equipo.service";


@Controller('equipo')
export class EquipoController{

    constructor(private readonly equipoService: EquipoService){}

    @Get()
    findAll(){
        return this.equipoService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() equipoDto: EquipoDto){
        await this.equipoService.create(equipoDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() equipoDto: EquipoDto ): Promise<any>{
        return this.equipoService.update(id,equipoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.equipoService.remove(id);
    }
}