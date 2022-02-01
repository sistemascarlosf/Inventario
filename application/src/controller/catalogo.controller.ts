import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { CatalogoDto } from "src/dto/catalogo.dto";
import { CatalogoService } from "src/services/catalogo.service";

@Controller('catalogo')
export class CatalogoController{

    constructor(private readonly catalogoService: CatalogoService){}

    @Get()
    findAll(){
        return this.catalogoService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() areaDto: CatalogoDto){
        await this.catalogoService.create(areaDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() catalogoDto: CatalogoDto ): Promise<any>{
        return this.catalogoService.update(id,catalogoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.catalogoService.remove(id);
    }
}