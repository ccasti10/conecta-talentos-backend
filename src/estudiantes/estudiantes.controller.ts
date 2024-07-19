import { Body, Post, Controller, Get, Param } from '@nestjs/common';
import { estudiante } from './estudiantes';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  //Obtiene todos los estudiantes
  constructor(private readonly servicio: EstudiantesService) {}

  //Obtiene todos los estudiantes
  @Get()
  obtenerEstudiantes(): estudiante[] {
    return this.servicio.obtenerEstudiantes();
  }
  //Obtiene estudiante por id
  @Get(':idestudiante')
  obtenerEstudiantesPorId(@Param('idestudiante') idest: number): estudiante {
    return this.servicio.obtenerEstudiantesPorId(idest);
  }
  //Crea un Estudiante
  @Post('')
  nuevoEstudiante(@Body() estudiante: estudiante): void {
    return this.servicio.nuevoEstudiante(estudiante);
  }
}
