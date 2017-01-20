import {Routes, RouterModule} from '@angular/router';
import { SgloHomeComponentComponent } from './components/mainComponents/sglo-home-component/sglo-home-component.component';
import { BodyPartsComponent } from './body-parts/body-parts.component';

const appRoutes = [
    {path: "bodyParts", component: BodyPartsComponent},
    {path: "", component: SgloHomeComponentComponent}
];
   

export const routing = RouterModule.forRoot(appRoutes);