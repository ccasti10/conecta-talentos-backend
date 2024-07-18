import { Body, Post, Controller, Get, Param, Res, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Estudiantes } from './estudiantes';
import { Empresa } from './empresa';

@Controller()
export class AppController {
  estudiante: Estudiantes[] = [];
  empresa: Empresa[] = [];

  constructor(private readonly appService: AppService) {
    //Datos de Prueba para estudiantes
    this.estudiante.push(
      new Estudiantes(
        1,
        'Nico',
        25,
        '1996-10-10',
        12345678,
        'Calle falsa 123',
        'asdf@asdf.com',
        'Ingenieria en Informatica',
      ),
    );
    this.estudiante.push(
      new Estudiantes(
        2,
        'gato',
        25,
        '1996-10-10',
        12345678,
        'Calle falsa 123',
        'asdf@asdf.com',
        'Ingenieria en Informatica',
      ),
    );
    this.estudiante.push(
      new Estudiantes(
        3,
        'Christian',
        25,
        '1996-10-10',
        12345678,
        'Calle falsa 123',
        'asdf@asdf.com',
        'Ingenieria en Informatica',
      ),
    );
    this.estudiante.push(
      new Estudiantes(
        4,
        'prueba',
        25,
        '1996-10-10',
        12345678,
        'Calle falsa 123',
        'asdf@asdf.com',
        'Ingenieria en Informatica',
      ),
    );
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('estudiantes')
  obtenerEstudiantes(): Estudiantes[] {
    return this.estudiante;
  }
  @Post('estudiantes')
  nuevoEstudiante(@Body() estudiante: Estudiantes): Estudiantes {
    estudiante.idEstudiante = this.estudiante.length + 1; // Se asigna un id al estudiante.
    console.log(
      ' Insertando estudiante largo arreglo ',
      this.estudiante.length,
    );
    console.log(' Insertando estudiante ', estudiante);
    this.estudiante.push(estudiante); // Se añade el estudiante al arreglo.
    return estudiante; // Se retorna el estudiante añadido.
  }

  @Get('empresas') // ✅
  obtenerEmpresas(): Empresa[] {
    return this.empresa;
  }
  @Post('empresas') // ✅
  nuevaEmpresa(@Body() empresa: Empresa): Empresa {
    this.empresa.push(empresa);
    return empresa;
  }
  // genera un decorador de tipo get que reciba un parametro id de tipo number y  retorne un estudiante
  @Get('estudiantes/:id')
  obtenerEstudianteId(@Param('id') id: number): Estudiantes {
    // Se busca el estudiante por el id recibido.
    for (let i = 0; i < this.estudiante.length; i++) {
      console.log('Recorre arreglo ID ', this.estudiante[i].idEstudiante);
      if (this.estudiante[i].idEstudiante === id) {
        console.log('id del estudiante encontrado ', id);
        console.log('Largo del arreglo es ', this.estudiante.length);
        return this.estudiante[i];
      }
    }
    console.log('Estudiante no encontrado con id ', id);
    console.log('Largo del arreglo es ', this.estudiante.length);
    return null; // en caso que no exista el id a filtrar
  }
  //Query params
  //localhost:3000/filtroEstudiantes?nombre=nico
  @Get('filtroEstudiantes')
  GetEstudiantes(@Query('nombre') nombre: string): Estudiantes[] {
    console.log('nombre recibido ', nombre);
    if (nombre !== undefined) {
      const filtroResultado = this.estudiante.filter(
        (estudiante) => estudiante.nombre === nombre,
      );
      console.log('Estudiante encontrado con nombre ', nombre);
      console.log(filtroResultado);
      return filtroResultado;
    } else {
      console.log('Parametro de busqueda vacio');
      return null;
    }
  }
} //fin de la clase
