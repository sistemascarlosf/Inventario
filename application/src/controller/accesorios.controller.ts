import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { AccesoriosDto } from "src/dto/accesorios.dto";
import { AccesoriosService } from "src/services/accesorios.service";


@Controller('accesorios')
export class AccesoriosController{

    constructor(private readonly accesoriosService: AccesoriosService){}

    @Get()
    findAll(){
        return this.accesoriosService.findAll();
    }
    
    @Get(':_id')
    findOne(@Param('_id') id){
        return this.accesoriosService.findOne(id);
    }

    @Post()
    async create(@Body() accesoriosDto: AccesoriosDto){
        await this.accesoriosService.create(accesoriosDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() accesoriosDto: AccesoriosDto ): Promise<any>{
        return this.accesoriosService.update(id,accesoriosDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.accesoriosService.remove(id);
    }
}