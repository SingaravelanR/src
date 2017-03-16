import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Alerts }        from './alerts.component';
import { routing }       from './alerts.routing';

import { StripedTable } from './stripedTable';
import { TrafficChart } from './trafficChart';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { BasicTablesService } from './stripedTable/basicTables.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    TrafficChart,
    StripedTable,
	Alerts,
  ],
  providers: [
    TrafficChartService,
    BasicTablesService,
  ]
})
export class AlertsModule {}
