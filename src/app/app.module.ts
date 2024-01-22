import { FormsModule } from '@angular/forms';

@NgModule({
  // ...
  imports: [
    // ...
    FormsModule
  ],
  // ...
})

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FiltroComponent } from './filtro/filtro.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObraComponent } from './obra/obra.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    FiltroComponent,
    GaleriaComponent,
    NavbarComponent,
    ObraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
