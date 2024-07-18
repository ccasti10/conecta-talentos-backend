import { Empresa } from './empresa';
import { Estudiantes } from './estudiantes';

export class Postulacion {
  constructor(
    public idPostulacion: number,
    public nombreEmpresa: Empresa,
    public fechaCreacion: string,
    public tipoPostulacion: string,
    public nombrePostulante: Estudiantes,
  ) {}
}
