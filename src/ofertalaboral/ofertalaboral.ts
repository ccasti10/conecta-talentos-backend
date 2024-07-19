import { Empresa } from 'src/empresas/empresa';

export class OfertaLaboral {
  constructor(
    public idOferta: number,
    public fechaCreacion: Date,
    public descripcion: string,
    public cargo: string,
    public region: string,
    public tipo: string,
    public estado: string,
    public empresa: Empresa,
    public postulaciones: number,
  ) {}
}
