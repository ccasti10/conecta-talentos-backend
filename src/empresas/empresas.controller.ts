import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from './empresa';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly servicio: EmpresasService) {}

  //Obtiene todas las empresas
  @Get()
  obtenerEmpresas(): Empresa[] {
    return this.servicio.obtenerEmpresas();
  }

  //Obtiene empresa por id
  @Get(':id')
  obtenerEmpresasPorId(@Param('id') id: number): Empresa {
    return this.servicio.obtenerEmpresasPorId(id);
  }
  //Crea una empresa
  @Post('')
  nuevaEmpresa(@Body() empresa: Empresa): void {
    return this.servicio.nuevaEmpresa(empresa);
  }
  //Elimina una empresa
  @Delete(': id')
  eliminaEmpresa(@Param('id') id: number): void {
    return this.servicio.eliminaEmpresa(id);
  }
  //Actualiza una empresa
  @Put(':id')
  actualizarEmpresa(@Param('id') id: number, @Body() empresa: Empresa): void {
    return this.servicio.actualizarEmpresa(id, empresa);
  }
} //fin de la clase
