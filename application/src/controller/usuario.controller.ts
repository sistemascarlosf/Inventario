import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { CreateUsuarioDto } from "src/dto/usuario.dto";
import { UsuarioService } from "src/services/usuario.service";

@Controller('usuario')
export class UsuarioController{

    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    findAll(){
        return this.usuarioService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto){
        await this.usuarioService.create(createUsuarioDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() createUsuarioDto: CreateUsuarioDto ): Promise<any>{
        return this.usuarioService.update(id,createUsuarioDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.usuarioService.remove(id);
    }
}