import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule, RequestOptions } from '@angular/http';

//Se utiliza para unas pruebas con firebase
import { AngularFireModule } from 'angularfire2';

//Componente Principal
import { AppComponent } from './app.component';

//Ejemplo de componente con firebase
import { BodyPartsComponent } from './body-parts/body-parts.component';

//Importamos modulo de rutas para la SPA
import {routing} from './app.routing';

//Ejemplo de la librería ng2-bootstrap usando un timepicker
import { TimepickerModule } from 'ng2-bootstrap/timepicker';

//Cargamos componentes de la plantilla principal de la aplicación
import { SgloHeaderComponentComponent } from './components/mainComponents/sglo-header-component/sglo-header-component.component';
import { SgloHomeComponentComponent } from './components/mainComponents/sglo-home-component/sglo-home-component.component';
import { AsideComponentComponent } from './components/mainComponents/aside-component/aside-component.component';


//Componente no necesario aún para generar un grid
import { GridComponentComponent } from './components/commonsComponents/grid-component/grid-component.component';

//Módulo para el manejo de internacionalización
import { TranslateModule } from "ng2-translate";





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
