import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CatalogoDto } from "src/dto/catalogo.dto";
import { Catalogo } from "src/schemas/catalogo.schema";

@Injectable()
export class CatalogoService {
    constructor(@InjectModel(Catalogo.name) private readonly catalogoModel: Model<CatalogoDto>
    ) { }

    async create(catalogoDto: CatalogoDto) {
        const newCatalogo = new this.catalogoModel(catalogoDto);
        await newCatalogo.save();
    }

    findAll() {
        return this.catalogoModel.find(
            {}, { text: 1, path: 1, _id: 0 }
        ).exec();
    }
    async update(id, catalogoDto) {
        return this.catalogoModel.findByIdAndUpdate(id, catalogoDto);
    }

    async remove(id) {
        await this.catalogoModel.findByIdAndRemove(id);
    }
}