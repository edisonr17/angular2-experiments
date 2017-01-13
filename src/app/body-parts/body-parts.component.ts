import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.component.html',
  styleUrls: ['./body-parts.component.css']
})
export class BodyPartsComponent implements OnInit {
  



bodyParts = [
    {title:'Head',src:"https://upload.wikimedia.org/wikipedia/commons/8/82/Camper_Measurements_on_human_male_head.jpg"}, 
    {title:"Shoulders",src:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Sunburnt_neck_and_shoulders.jpg"}, 
    {title:"Knees",src:"http://i.vimeocdn.com/video/569145007_1280x720.jpg"}, 
    {title:"Feet",src:"https://c1.staticflickr.com/6/5012/5526911792_136d501c61_b.jpg"}
  ];
  
  constructor() {
    interface BodyParts {
      part: string;
      src: string;
    }


  }

  ngOnInit() {
   
  }


  /**
  * Método que lista las partes del cuerpo humano 
  */
  humanBodyParts(){

  };

}
