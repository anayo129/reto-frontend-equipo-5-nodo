import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { MaterialComponent } from './material/material.component';
import { PagosComponent } from './pagos/pagos.component';
import { EncabezadoComponent } from './index/encabezado/encabezado.component';
import { QuienesSomosComponent } from './index/quienes-somos/quienes-somos.component';
import { PromicionesComponent } from './index/promiciones/promiciones.component';
import { ResenasComponent } from './index/resenas/resenas.component';
import { FooterComponent } from './index/footer/footer.component';
import { MentalComponent } from './home/mental/mental.component';
import { FisicoComponent } from './home/fisico/fisico.component';
import { EmocionalComponent } from './home/emocional/emocional.component';
import { EnergeticoComponent } from './home/energetico/energetico.component';
import { EspiritualComponent } from './home/espiritual/espiritual.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './index/landing-page/landing-page.component';
import { NavbarIndexComponent } from './index/navbar-index/navbar-index.component';
import { FormularioComponent } from './login/formulario/formulario.component';
import { ContrasenaComponent } from './login/contrasena/contrasena.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookieService } from 'ngx-cookie-service';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    HomeComponent,
    MaterialComponent,
    PagosComponent,
    EncabezadoComponent,
    QuienesSomosComponent,
    PromicionesComponent,
    ResenasComponent,
    FooterComponent,
    MentalComponent,
    FisicoComponent,
    EmocionalComponent,
    EnergeticoComponent,
    EspiritualComponent,
    LandingPageComponent,
    NavbarIndexComponent,
    FormularioComponent,
    ContrasenaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
