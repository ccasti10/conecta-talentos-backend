import { Injectable } from '@nestjs/common';
import { estudiante } from './estudiantes';

@Injectable()
export class EstudiantesService {
  private estudiantes: estudiante[] = [];

  obtenerEstudiantes(): estudiante[] {
    return this.estudiantes;
  }

  obtenerEstudiantesPorId(id: number): estudiante {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id == id) {
        return this.estudiantes[i];
      }
    }
    return null; // Return null if no matching student is found
  }
  nuevoEstudiante(estudiante: estudiante): void {
    estudiante.id = this.estudiantes.length + 1; // Se asigna un id al estudiante.
    this.estudiantes.push(estudiante);
  }
  eliminaEstudiante(id: number): void {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id == id) {
        this.estudiantes.splice(i, 1);
      }
    }
  }
  editarEstudiante(id: number, estudiante: estudiante): void {
    let estudianteUPD: estudiante = this.obtenerEstudiantesPorId(id);
    estudianteUPD.nombre = estudiante.nombre;
    estudianteUPD.profesion = estudiante.profesion;
  }
} // fin de la clase
