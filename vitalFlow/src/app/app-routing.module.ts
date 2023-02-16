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
import { MaterialComponent } from './material/material.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistroComponent } from './registro/registro.component';
import { CursoComponent } from './curso/curso.component';
import { PagosComponent } from './pagos/pagos.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
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
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test/:id',
    component: TestComponent,
  },
  {
    path: 'curso/:id',
    component: CursoComponent,
  },
  {
    path: 'material/:id',
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
  {
    path: '**',
    component: PageNotFoundComponent
  },
 
  // {
  //   path: '',
  //   redirectTo: '/registro',
  //   pathMatch: 'full',
    

  // }
  // },

    

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
