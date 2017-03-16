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
        value: 4,
        color: dashboardColors.red,
        highlight: colorHelper.shade(dashboardColors.red, 15),
        label: 'High',
        percentage: 60,
        order: 4,
      }, {
        value: 3,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Medium',
        percentage: 30,
        order: 3,
      }, {
        value: 1,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Low',
        percentage: 10,
        order: 2,
      }, 
    ];
  }
}
