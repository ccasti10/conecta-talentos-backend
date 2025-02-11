import {
  Body,
  Query,
  Post,
  Controller,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { estudiante } from './estudiantes';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly servicio: EstudiantesService) {}

  //Obtiene todos los estudiantes
  @Get()
  obtenerEstudiantes(): estudiante[] {
    return this.servicio.obtenerEstudiantes();
  }
  //Obtiene estudiante por id
  @Get(':id')
  obtenerEstudiantesPorId(@Param('id') id: number): estudiante {
    return this.servicio.obtenerEstudiantesPorId(id);
  }
  //Crea un Estudiante
  @Post('')
  nuevoEstudiante(@Body() estudiante: estudiante): void {
    return this.servicio.nuevoEstudiante(estudiante);
  }
  @Delete(':id')
  eliminaEstudiante(@Param('id') id: number): void {
    return this.servicio.eliminaEstudiante(id);
  }
  @Put(':id')
  editarEstudiante(
    @Param('id') id: number,
    @Body() estudiante: estudiante,
  ): void {
    return this.servicio.editarEstudiante(id, estudiante);
  }
  //Query Params para seleccionar el nombre del estudiante
  @Get('filtroEstudiantes') getEstudiantes(@Query('nombre') nombre: string): estudiante[] {
    console.log('parametro nombre:', nombre);
    return this.servicio.getEstudiantes(nombre);
  }
}
