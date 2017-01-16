import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { BodyPartsComponent } from './body-parts/body-parts.component';
import { routing } from './app.routing';

import { TimepickerModule } from 'ng2-bootstrap/timepicker';


//Configuración para Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyB5KojkzO7hs2mzuMAlPh3_d2rrFXiM6f4',
  authDomain: 'bodyparts-dba1f.firebaseapp.com',
  databaseURL: 'https://bodyparts-dba1f.firebaseio.com/',
  storageBucket: 'bodyparts-dba1f.appspot.com',
  messagingSenderId: '384400781303'
};



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
    JsonpModule,
    routing,
    TimepickerModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
