import { Injectable } from '@nestjs/common';
import { Empresa } from './empresa';

@Injectable()
export class EmpresasService {
  private empresas: Empresa[] = [];

  obtenerEmpresas(): Empresa[] {
    return this.empresas;
  }

  obtenerEmpresasPorId(id: number): Empresa {
    for (let i = 0; i < this.empresas.length; i++) {
      if (this.empresas[i].idEmpresa == id) {
        return this.empresas[i];
      }
    }
  }
  nuevaEmpresa(empresa: Empresa): void {
    empresa.idEmpresa = this.empresas.length + 1; // Se asigna un id a la empresa.
    this.empresas.push(empresa);
  }
  eliminaEmpresa(id: number): void {
    for (let i = 0; i < this.empresas.length; i++) {
      if (this.empresas[i].idEmpresa == id) {
        this.empresas.splice(i, 1);
      }
    }
  }
  actualizarEmpresa(id: number, empresa: Empresa): void {
    let empresaUPD: Empresa = this.obtenerEmpresasPorId(id);
    empresaUPD.nombre = empresa.nombre;
    empresaUPD.tipo = empresa.tipo;
  }
} // fin de la clas
