import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EncabezadoComponent } from './index/encabezado/encabezado.component';
import { FooterComponent } from './index/footer/footer.component';
import { PromicionesComponent } from './index/promiciones/promiciones.component';
import { QuienesSomosComponent } from './index/quienes-somos/quienes-somos.component';
import { ResenasComponent } from './index/resenas/resenas.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './login/formulario/formulario.component';
import { ContrasenaComponent } from './login/contrasena/contrasena.component';
import { AuthGuard } from './auth.guard';
import { RegistroComponent } from './registro/registro.component';
import { CursoComponent } from './curso/curso.component';
import { PagosComponent } from './pagos/pagos.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
//   { path: 'index', component: IndexComponent, children: [
//     { path: 'encabezadoi', component: EncabezadoComponent },
//     { path: 'footer', component: FooterComponent },
//     { path: 'promociones', component: PromicionesComponent },
//     { path: 'quienes_somos', component: QuienesSomosComponent },
//     { path: 'resenas', component: ResenasComponent},
//   ] },
//   // { path: 'componente2', component: Componente2Component, children: [
//   //   { path: 'hijo1', component: Hijo1Component2 },
//   //   { path: 'hijo2', component: Hijo2Component2 }
//   // ] },
//   { path: '', redirectTo: '/index', pathMatch: 'full' }
// ];
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'password',
    component: ContrasenaComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'curso',
    component: CursoComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'pagos',
    component: PagosComponent,
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
    
  },
  // {
  //   path: '',
  //   redirectTo: '/registro',
  //   pathMatch: 'full',
  // }
    
]
@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
