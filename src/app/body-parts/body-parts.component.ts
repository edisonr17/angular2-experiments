import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


 interface BodyParts {
      title: string;
      src: string;
  };

@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.component.html',
  styleUrls: ['./body-parts.component.css']
})
export class BodyPartsComponent implements OnInit {
  
 bodyPart: string;
  url: string;
  urlBodyParts= "https://bodyparts-dba1f.firebaseio.com/";
  

  private bodyParts: BodyParts[] = [];  
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/');
  }


  /**
  * Agregar o eliminar un item de un array código typescript 
  */
  addItem(title:string, src:string)
  {
    this.bodyParts.push({title,src}); 
    this.items.push({title,src});
  }

  /**
  *  Eliminar un item de un array código typescript
  */
  removeItem(bodyPart: BodyParts)
  {
    let index = this.bodyParts.indexOf(bodyPart);
    if(index > -1)
    {
      this.bodyParts.splice(index,1);
    }
  }

  getBodyParts()
  {
   
  }
    /*this.http.get(this.urlBodyParts).subscribe(
      response => {
        let data = response.json();
        console.log(data);
      }  
    );*/


  

  //Valores iniciales para el cuerpo humano.
  /* initialValues()
  {
    this.bodyParts = [
    {title:'Head',src:"https://upload.wikimedia.org/wikipedia/commons/8/82/Camper_Measurements_on_human_male_head.jpg"}, 
    {title:"Shoulders",src:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Sunburnt_neck_and_shoulders.jpg"}, 
    {title:"Knees",src:"http://i.vimeocdn.com/video/569145007_1280x720.jpg"}, 
    {title:"Feet",src:"https://c1.staticflickr.com/6/5012/5526911792_136d501c61_b.jpg"}
    ];
  }*/


  ngOnInit() 
  {
    this.getBodyParts();
  }


  /**
  * Método que lista las partes del cuerpo humano 
  */
  humanBodyParts(){

  };

}
