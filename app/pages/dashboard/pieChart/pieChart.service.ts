import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Duplicate Records',
        stats: '12,047',
	   }, {
        color: pieColor,
        description: 'Record Mismatch',
        stats: '89,745',
      }, {
        color: pieColor,
        description: 'Total Valid Records',
        stats: '178,391',
      }, {
        color: pieColor,
        description: 'Record Missing',
        stats: '32,592',
      }
    ];
  }
}
