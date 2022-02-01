import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { CreateCargoDto } from "src/dto/cargo.dto";
import { Cargo } from "src/schemas/cargo.schema";
import { CargoService } from "src/services/cargo.service";

@Controller('cargo')
export class CargoController{

    constructor(private readonly cargoService: CargoService){}

    @Get()
    findAll(): Promise<Cargo[]>{
        return this.cargoService.findAll();
    }

    @Get(':id')
    find(@Param('id') id){
        return 'buscar por un id';
    }

    @Post()
    async create(@Body() createCargoDto: CreateCargoDto){
        await this.cargoService.create(createCargoDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateCargoDto: CreateCargoDto ): Promise<any>{
        return this.cargoService.update(id,updateCargoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Promise<any>{
        return this.cargoService.remove(id);
    }
}