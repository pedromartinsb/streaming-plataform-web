import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  // Configuração do gráfico de linha (ex.: Crescimento de Inscritos)
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [50, 75, 150, 100, 200, 250],
        label: 'Inscritos',
        fill: 'origin',
        borderColor: '#8e44ad',
        backgroundColor: 'rgba(142,68,173,0.3)',
        tension: 0.4,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public lineChartType: 'line' = 'line';

  // Configuração do gráfico de rosca (ex.: Distribuição de Cursos)
  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Cursos Online', 'Cursos Presenciais', 'Workshops'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ['#8e44ad', '#9b59b6', '#bdc3c7'],
      },
    ],
  };

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public doughnutChartType: 'doughnut' = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
