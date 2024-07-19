import { Injectable } from '@nestjs/common';
import { estudiante } from './estudiantes';

@Injectable()
export class EstudiantesService {
  private estudiantes: estudiante[] = [];

  obtenerEstudiantes(): estudiante[] {
    return this.estudiantes;
  }

  obtenerEstudiantesPorId(id: number): estudiante {
    // Se busca el estudiante por el id recibido.
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        return this.estudiantes[i];
      }
    }
  }
  nuevoEstudiante(estudiante: estudiante): void {
    estudiante.id = this.estudiantes.length + 1; // Se asigna un id al estudiante.
    this.estudiantes.push(estudiante);
  }
} // fin de la clase
