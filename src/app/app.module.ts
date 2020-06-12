import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    ReportesComponent,
    ClientesComponent,
    TarifasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
