import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  message='This is my first databinding';
  logo="https://upload.wikimedia.org/wikipedia/commons/3/3b/Battons-nous_avec_Tux.png"
  constructor() {
     
  }

  ngOnInit() {
  }

}
