import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { estudiante } from './estudiantes/estudiantes';

@Controller('estudiantes')
export class AppController {
  constructor(private readonly servicio: EstudiantesService) {}
  @Get()
  obtenerEstudiantes(): estudiante[] {
    return this.servicio.obtenerEstudiantes();
  }
} //fin de la clase
