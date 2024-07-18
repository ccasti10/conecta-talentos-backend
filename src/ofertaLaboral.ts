import { Empresa } from './empresa';
import { Postulacion } from './postulacion';

export class Ofertalaboral {
  constructor(
    public idOfertaLaboral: number,
    public puesto: string,
    public resposabilidades: string,
    public condicionesTrabajo: string,
    public compensaciones: string,
    public nombrePostulante: Postulacion,
    public nombreEmpresa: Empresa,
  ) {}
}
