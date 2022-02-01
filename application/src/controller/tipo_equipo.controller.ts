import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { TipoEquipoDto } from "src/dto/tipo_equipo.dto";
import { TipoEquipoService } from "src/services/tipo_equipo.service";

@Controller('tipo_equipo')
export class TipoEquipoController{

    constructor(private readonly tipoEquipoService: TipoEquipoService){}

    @Get()
    findAll(){
        return this.tipoEquipoService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() tipoEquipoDto: TipoEquipoDto){
        await this.tipoEquipoService.create(tipoEquipoDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() tipoEquipoDto: TipoEquipoDto ): Promise<any>{
        return this.tipoEquipoService.update(id,tipoEquipoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.tipoEquipoService.remove(id);
    }
}