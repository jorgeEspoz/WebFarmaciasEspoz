import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EsqueletoComponent } from './shared/esqueleto/esqueleto.component';
import { PaginaContactoComponent } from './pages/Contacto/pagina-contacto/pagina-contacto.component';
import { PaginaSucursalesComponent } from './pages/Sucursales/pagina-sucursales/pagina-sucursales.component';
import { PaginaNosotrosComponent } from './pages/Nosotros/pagina-nosotros/pagina-nosotros.component';
import { RrssComponent } from './pages/rrss/rrss.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { ValoresComponent } from './components/valores/valores.component';
import { VisionMisionComponent } from './components/vision-mision/vision-mision.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { TipoConsultaComponent } from './components/tipo-consulta/tipo-consulta.component';
import { TelefonosContactoComponent } from './components/telefonos-contacto/telefonos-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EsqueletoComponent,
    PaginaContactoComponent,
    PaginaSucursalesComponent,
    PaginaNosotrosComponent,
    RrssComponent,
    PiePaginaComponent,
    ValoresComponent,
    VisionMisionComponent,
    CarruselComponent,
    FormularioContactoComponent,
    TipoConsultaComponent,
    TelefonosContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
