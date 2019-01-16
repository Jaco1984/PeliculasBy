import { HttpClientModule } from '@angular/common/http';
import { ImagenPipePipe } from './pipes/imagen-pipe.pipe';


import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { PeliculasService } from './service/peliculas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { InformacionPelisComponent } from './components/informacion-pelis/informacion-pelis.component';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculasComponent,
    InformacionPelisComponent,
    ImagenPipePipe,
    PieComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule

  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
