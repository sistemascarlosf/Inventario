import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { TipoAccesorioDto } from "src/dto/tipo_accesorio.dto";
import { CreateUsuarioDto } from "src/dto/usuario.dto";
import { TipoAccesorioService } from "src/services/tipo_accesorio.service";
import { UsuarioService } from "src/services/usuario.service";

@Controller('tipo_accesorio')
export class TipoAccesorioController{

    constructor(private readonly tipoAccesorioService: TipoAccesorioService){}

    @Get()
    findAll(){
        return this.tipoAccesorioService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() tipoAccesorioDto: TipoAccesorioDto){
        await this.tipoAccesorioService.create(tipoAccesorioDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() tipoAccesorioDto: TipoAccesorioDto ): Promise<any>{
        return this.tipoAccesorioService.update(id,tipoAccesorioDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.tipoAccesorioService.remove(id);
    }
}