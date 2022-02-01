import { Controller } from "@nestjs/common";
import { Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { RazonSocialDto } from "src/dto/razon_social.dto";
import { RazonSocialService } from "src/services/razon_social.service";

@Controller('razon_social')
export class RazonSocialController{
    constructor(private readonly razonSocialService: RazonSocialService){}

    @Get()
    findAll(){
        return this.razonSocialService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() razonSocialDto: RazonSocialDto){
        await this.razonSocialService.create(razonSocialDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() razonSocialDto: RazonSocialDto ): Promise<any>{
        return this.razonSocialService.update(id,razonSocialDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.razonSocialService.remove(id);
    }
}