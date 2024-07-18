import { Estudiantes } from 'src/estudiantes/estudiantes';

export class Postulacion {
  constructor(
    public id: number,
    public fechaPostulacion: string,
    public estudiante: Estudiantes,
    public estado: string,
  ) {}
}
