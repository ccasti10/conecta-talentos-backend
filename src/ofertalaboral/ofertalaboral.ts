import { Empresas } from 'src/empresas/empresas';

export class OfertaLaboral {
  constructor(
    public idOferta: number,
    public fechaCreacion: string,
    public descripcion: string,
    public cargo: string,
    public region: string,
    public tipo: string,
    public estado: string,
    public empresa: Empresas,
    public postulaciones: number,
  ) {}
}
