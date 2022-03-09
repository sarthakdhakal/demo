import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})
export class AnimationComponent {
  public chartType: ChartType = 'doughnut';
  public chartLabels: Array<string> = ['Random', 'Random1', 'Random2'];
  public chartData: Array<number> = [2, 5, 7];

  public chartOptions: any = {
    pieceLabel: {
      render: function (args: any) {
        const label = args.label,
          value = args.value;
        return label + ': ' + value;
      },
    },
  };
}
