import { Component } from '@angular/core';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//Importamos y creamos el constructor de internacionalización ng2-translate y especificamos por defecto el lenguaje en español.

  export class AppComponent {
    constructor(private translate: TranslateService)
    {
      translate.addLangs(["en","es"]);
      translate.setDefaultLang("es");
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match("/en|es") ? browserLang : "es");
    }

  title = 'Mi primer ejemplo';
}
