import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { UnidadNegocioDto } from "src/dto/unidad_negocio.dto";
import { UnidadNegocioService } from "src/services/unidad_negocio.service";

@Controller('unidad_negocio')
export class UnidadNegocioController{

    constructor(private readonly unidadNegocioService: UnidadNegocioService){}

    @Get()
    findAll(){
        return this.unidadNegocioService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() unidadNegocioDto: UnidadNegocioDto){
        await this.unidadNegocioService.create(unidadNegocioDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() unidadNegocioDto: UnidadNegocioDto ): Promise<any>{
        return this.unidadNegocioService.update(id,unidadNegocioDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.unidadNegocioService.remove(id);
    }
}