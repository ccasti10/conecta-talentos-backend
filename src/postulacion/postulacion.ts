import { estudiante } from "src/estudiantes/estudiantes";

export class Postulacion {
  constructor(
    public id: number,
    public fechaPostulacion: Date,
    public estudiante: estudiante,
    public estado: string,
  ) {}
}
