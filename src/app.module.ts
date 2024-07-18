import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { OfertalaboralController } from './ofertalaboral/ofertalaboral.controller';
import { PostulacionController } from './postulacion/postulacion.controller';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController, EmpresasController, OfertalaboralController, PostulacionController],
  providers: [AppService],
})
export class AppModule {}
