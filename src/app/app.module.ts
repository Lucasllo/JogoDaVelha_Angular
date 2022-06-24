import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    JogoDaVelhaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
