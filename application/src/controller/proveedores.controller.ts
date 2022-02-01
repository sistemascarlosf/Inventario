import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { ProveedoresDto } from "src/dto/proveedores.dto";
import { ProveedoresService } from "src/services/proveedores.service";
@Controller('proveedores')
export class ProveedoresController{
    constructor(private readonly proveedoresService : ProveedoresService){}

    @Get()
    findAll(){
        return this.proveedoresService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() proveedoresDto: ProveedoresDto){
        await this.proveedoresService.create(proveedoresDto);
    }

    @Put(':id')
    update(@Param('id') id, @Body() proveedoresDto: ProveedoresDto ){
        return this.proveedoresService.update(id,proveedoresDto);
    }

    @Delete(':id')
    delete(@Param('id') _id: number) : Promise<any>{
        return this.proveedoresService.remove(_id);
    }
}