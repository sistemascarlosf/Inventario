import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaController } from './controller/area.controller';
import { CargoController } from './controller/cargo.controller';
import { ProveedoresController } from './controller/proveedores.controller';
import { RazonSocialController } from './controller/razon_social.controller';
import { UnidadNegocioController } from './controller/unidad_negocio.controller';
import { UsuarioController } from './controller/usuario.controller';
import { CargoSchema } from './schemas/cargo.schema';
import { ProveedoresSchema } from './schemas/proveedores.schema';
import { RazonSocialSchema } from './schemas/razon_social.schema';
import { UnidadNegocioSchema } from './schemas/unidad_negocio.schema';
import { UsuarioSchema } from './schemas/usuario.schema';
import { AreaService } from './services/area.service';
import { CargoService } from './services/cargo.service';
import { ProveedoresService } from './services/proveedores.service';
import { RazonSocialService } from './services/razon_social.service';
import { UnidadNegocioService } from './services/unidad_negocio.service';
import { UsuarioService } from './services/usuario.service';
import { AreaSchema } from './schemas/area.schema';
import { MarcaSchema } from './schemas/marca.schema';
import { MarcaController } from './controller/marca.controller';
import { MarcaService } from './services/marca.service';
import { StatusSchema } from './schemas/status.schema';
import { StatusController } from './controller/status.controller';
import { StatusService } from './services/status.service';
import { TipoEquipoSchema } from './schemas/tipo_equipo.schema';
import { TipoEquipoController } from './controller/tipo_equipo.controller';
import { TipoEquipoService } from './services/tipo_equipo.service';
import { EquipoService } from './services/equipo.service';
import { EquipoController } from './controller/equipo.controller';
import { EquipoSchema } from './schemas/equipo.schema';
import { TipoAccesorioService } from './services/tipo_accesorio.service';
import { TipoAccesorioController } from './controller/tipo_accesorio.controller';
import { TipoAccesorioSchema } from './schemas/tipo_accesorio.schema';
import { AccesoriosSchema } from './schemas/accesorios.schema';
import { AccesoriosController } from './controller/accesorios.controller';
import { AccesoriosService } from './services/accesorios.service';
import { AsignacionSchema } from './schemas/asignacion.schema';
import { AsignacionController } from './controller/asignacion.controller';
import { AsignacionService } from './services/asignacion.service';
import { CatalogoSchema } from './schemas/catalogo.schema';
import { CatalogoController } from './controller/catalogo.controller';
import { CatalogoService } from './services/catalogo.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/application'),
    MongooseModule.forFeature([{name: 'Cargo', schema: CargoSchema, collection: 'cargo'},
    {name :'Usuario', schema:UsuarioSchema, collection: 'usuario'},
    {name :'Proveedores', schema:ProveedoresSchema, collection: 'proveedores'},
    {name :'RazonSocial', schema:RazonSocialSchema, collection: 'razon_social'},
    {name :'UnidadNegocio', schema: UnidadNegocioSchema, collection: 'unidad_negocio'},
    {name :'Area', schema: AreaSchema, collection: 'area'},
    {name :'Marca', schema: MarcaSchema, collection: 'marca'},
    {name :'Status', schema: StatusSchema, collection: 'status'},
    {name :'TipoEquipo', schema: TipoEquipoSchema, collection: 'tipo_equipo'},
    {name :'Equipo', schema: EquipoSchema, collection: 'equipo'},
    {name :'TipoAccesorio', schema: TipoAccesorioSchema, collection: 'tipo_accesorio'},
    {name :'Accesorios', schema: AccesoriosSchema, collection: 'accesorios'},
    {name :'Asignacion', schema: AsignacionSchema, collection: 'asignacion'},
    {name :'Catalogo', schema: CatalogoSchema, collection: 'catalogo'}

  ])
  ],
  controllers: [AppController,
    CargoController,
    UsuarioController,
    ProveedoresController,
    RazonSocialController,
    UnidadNegocioController,
    AreaController,
    MarcaController,
    StatusController,
    TipoEquipoController,
    EquipoController,
    TipoAccesorioController,
    AccesoriosController,
    AsignacionController,
    CatalogoController
  ],
  providers: [AppService, 
    CargoService,
    UsuarioService,
    ProveedoresService,
    RazonSocialService,
    UnidadNegocioService,
    AreaService,
    MarcaService,
    StatusService,
    TipoEquipoService,
    EquipoService,
    TipoAccesorioService,
    AccesoriosService,
    AsignacionService,
    CatalogoService
  ],
})
export class AppModule {}
