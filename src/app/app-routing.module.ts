import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'reservas', component: ReservasComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tarifas', component: TarifasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
