import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { MarcaDto } from "src/dto/marca.dto"; 
import { MarcaService } from "src/services/marca.service";

@Controller('marca')
export class MarcaController{
 
    constructor(private readonly marcaService: MarcaService){}

    

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }
    @Get()
    findAll(){
       
        return this.marcaService.findAll();
    }

    @Post()
    async create(@Body() marcaDto: MarcaDto){
        await this.marcaService.create(marcaDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() marcaDto: MarcaDto ): Promise<any>{
        return this.marcaService.update(id,marcaDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.marcaService.remove(id);
    }
}