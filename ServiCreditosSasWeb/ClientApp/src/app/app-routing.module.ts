import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteConsultaComponent } from './PrestamoFinanciero/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './PrestamoFinanciero/cliente-registro/cliente-registro.component';

const routes: Routes = [
  {
    path: 'Consulta',
    component: ClienteConsultaComponent
  },
  {
    path: 'Registro',
    component: ClienteRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
