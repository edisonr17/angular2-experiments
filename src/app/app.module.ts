import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { BodyPartsComponent } from './body-parts/body-parts.component';

import { TimepickerModule } from 'ng2-bootstrap/timepicker';


@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    BodyPartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, HolaMundoComponent,BodyPartsComponent]
})
export class AppModule { }
