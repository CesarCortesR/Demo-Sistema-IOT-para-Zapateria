import { Component } from '@angular/core';

@Component({
    selector: 'grafica-barra-visitas-clientes',
    templateUrl: 'grafica.barra.visitas.clientes.component.html',
})

export class GraficaBarraVisitasClientes {

    public chartType:string = 'bar';

    public chartDatasets:Array<any> = [
        {data: [5,7,4,7,10,5,6,9,6,3,4,8,3]}
    ];

    public chartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(94,226,160,0.7)',
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        }
    ];

    public chartOptions:any = {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              /*max: 6,
              min: 0,
              stepSize: 2,*/
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        }
    };

}
