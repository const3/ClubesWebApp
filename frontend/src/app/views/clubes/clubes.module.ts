import { NgModule } from '@angular/core';

import { AventurerosComponent } from './aventureros.component';

import { ClubesRoutingModule } from './clubes-routing.module';
import {ConquistadoresComponent} from './conquistadores.component';
import {GuiasMayoresComponent} from './guias-mayores.component';

@NgModule({
  imports: [
    ClubesRoutingModule,
  ],
  declarations: [ AventurerosComponent, ConquistadoresComponent, GuiasMayoresComponent ]
})
export class ClubesModule { }
