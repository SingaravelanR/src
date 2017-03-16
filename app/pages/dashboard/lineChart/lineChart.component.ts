import {Component} from '@angular/core';

import {LineChartService} from './lineChart.service';

import 'style-loader!./lineChart.scss';

@Component({
  selector: 'line-chart',
  templateUrl: './lineChart.html'
})
export class LineChart {

  chartData:Object;

  constructor(private _lineChartService:LineChartService) {
    this.chartData = this._lineChartService.getData();
  }

  initChart(chart:any) {
    let zoomChart = () => {
      chart.zoomToDates(new Date(2016, 3), new Date(2017, 3));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
