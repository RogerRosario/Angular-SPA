import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import {  APP_ROUTING } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { Heroe2Component } from './components/heroe2/heroe2.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesService } from './Servicios/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    Heroe2Component,
    HeroeTarjetaComponent
    
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
