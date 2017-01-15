import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  
 /**
 * Propiedades
 */
  message = 'This is my first databinding';
  logo = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Battons-nous_avec_Tux.png";
 

  constructor() {
     
  }

  ngOnInit() {
 
  };

  /**
  * Este método nos devuelve el enunciado y el resultado de la suma de 2 números aleatoreos generados con javascript 
  */
  sum(){
    var x:number = Math.floor(Math.random() * 6);
    var y:number = Math.floor(Math.random() * 6);
    alert(x + " + " + y + " = " + (x + y));
  };
  
 

}
