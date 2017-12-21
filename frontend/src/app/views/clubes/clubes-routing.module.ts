import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AventurerosComponent } from './aventureros/aventureros.component';
import { ConquistadoresComponent } from './conquistadores/conquistadores.component';
import {GuiasMayoresComponent} from './guias-mayores/guias-mayores.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clubes'
    },
    children:[
      {
        path: 'aventureros',
        component: AventurerosComponent,
        data: {
          title: 'Aventureros'
        }
      },
      {
        path: 'conquistadores',
        component: ConquistadoresComponent,
        data: {
          title: 'Conquistadores'
        }
      },
      {
        path: 'guias-mayores',
        component: GuiasMayoresComponent,
        data: {
          title: 'Guías Mayores'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubesRoutingModule {}
