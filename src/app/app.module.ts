import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule, RequestOptions } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { BodyPartsComponent } from './body-parts/body-parts.component';
import {routing} from './app.routing';

import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { SgloHeaderComponentComponent } from './components/mainComponents/sglo-header-component/sglo-header-component.component';
import { GridComponentComponent } from './components/commonsComponents/grid-component/grid-component.component';

import { SgloHomeComponentComponent } from './components/mainComponents/sglo-home-component/sglo-home-component.component';
import { TranslateModule } from "ng2-translate";
import { AsideComponentComponent } from './components/mainComponents/aside-component/aside-component.component';



 




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
    BodyPartsComponent,
    SgloHeaderComponentComponent,
    GridComponentComponent,
    SgloHomeComponentComponent,
    AsideComponentComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    TimepickerModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
