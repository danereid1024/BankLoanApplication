import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-transaction-flow',
  standalone: true,
  imports: [],
  templateUrl: './transaction-flow.component.html',
  styleUrl: './transaction-flow.component.scss',
})
export class TransactionFlowComponent implements OnInit {
  @ViewChild('chart') chartCanvas!: ElementRef;

  private chart!: Chart;

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart() {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Transaction Flow',
          data: [140000, 160000, 150000, 145000, 155000, 165000],
          borderColor: '#2b3ddb',
          backgroundColor: 'rgba(43, 61, 219, 0.1)',
          fill: true,
          tension: 0.4,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }
}
