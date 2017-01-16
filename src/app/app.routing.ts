import {Routes, RouterModule} from '@angular/router';

import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { BodyPartsComponent } from './body-parts/body-parts.component';

const appRoutes = [
    {path: "bodyParts", component: BodyPartsComponent},
    {path: "inicio", component: HolaMundoComponent},
    {path: "", redirectTo: 'inicio', pathMatch:'full'}
]

export const routing = RouterModule.forRoot(appRoutes);