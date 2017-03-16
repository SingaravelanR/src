import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 2000,
        color: dashboardColors.violet,
        highlight: colorHelper.shade(dashboardColors.violet, 15),
        label: 'Duplicate Records',
        percentage: 87,
        order: 1,
      }, {
        value: 1500,
        color: dashboardColors.red,
        highlight: colorHelper.shade(dashboardColors.red, 15),
        label: 'Discrepancy',
        percentage: 39,
        order: 4,
      }, {
        value: 1000,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Missing Records',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'No Discrepancy',
        percentage: 38,
        order: 2,
      }, 
    ];
  }
}
