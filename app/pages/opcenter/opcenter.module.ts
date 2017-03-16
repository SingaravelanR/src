import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Opcenter } from './opcenter.component';
import { routing }       from './opcenter.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
	HoverTable
  ],
  providers: [
	BasicTablesService
  ]
})
export class OpcenterModule {}
