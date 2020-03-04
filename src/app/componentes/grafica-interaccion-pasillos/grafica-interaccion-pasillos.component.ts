import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { IntervalosInteraccionPasillos } from '../../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
  selector: 'app-grafica-interaccion-pasillos',
  templateUrl: './grafica-interaccion-pasillos.component.html',
  styleUrls: ['./grafica-interaccion-pasillos.component.scss']
})
export class GraficaInteraccionPasillosComponent implements OnInit {

  CamposIntervalosInteraccionPasillos: IntervalosInteraccionPasillos[];
  IntervalosInteraccionPasillos: string[] = new Array();

  Total78P1: number = 0;
  Total89P1: number = 0;
  Total910P1: number = 0;
  Total1011P1: number = 0;
  Total1112P1: number = 0;
  Total1213P1: number = 0;
  Total1314P1: number = 0;
  Total1415P1: number = 0;
  Total1516P1: number = 0;
  Total1617P1: number = 0;
  Total1718P1: number = 0;
  Total1819P1: number = 0;
  Total1920P1: number = 0;
  Total2021P1: number = 0;
  Total2122P1: number = 0;
  Total2223P1: number = 0;

  Total78P2: number = 0;
  Total89P2: number = 0;
  Total910P2: number = 0;
  Total1011P2: number = 0;
  Total1112P2: number = 0;
  Total1213P2: number = 0;
  Total1314P2: number = 0;
  Total1415P2: number = 0;
  Total1516P2: number = 0;
  Total1617P2: number = 0;
  Total1718P2: number = 0;
  Total1819P2: number = 0;
  Total1920P2: number = 0;
  Total2021P2: number = 0;
  Total2122P2: number = 0;
  Total2223P2: number = 0;

  ResultadoArreglo: string;

  constructor(public Metodos: Servicios,
    public Firebase: AngularFireDatabase) { }

  ngOnInit() {
    //this.InteraccionHoras();
    this.Pasillo1();
  }

  InteraccionHoras(){
    
    this.Metodos.ObtenerIntervalosInteraccionPasillos().snapshotChanges()
    .subscribe(item => {
      this.CamposIntervalosInteraccionPasillos = [];
      item.forEach(element => {
        let x: any = element.payload.toJSON();
        x["$key"] = element.key;
        //this.CamposIntervalosInteraccionPasillos.push(x);
        this.IntervalosInteraccionPasillos.push(x['Hora'] + " H");
      });
      //console.log(this.IntervalosInteraccionPasillos);
      this.chartLabels = this.IntervalosInteraccionPasillos;
    });
  }

  Pasillo1(){
    this.Metodos.ObtenerIntervalosInteraccionPasillos().snapshotChanges()
    .subscribe(item => {
      this.CamposIntervalosInteraccionPasillos = [];
      item.forEach(element => {
        let x: any = element.payload.toJSON();
        x["$key"] = element.key        
        this.CamposIntervalosInteraccionPasillos.push(x);
        
      });

      for(var x of this.CamposIntervalosInteraccionPasillos){
        if(x['Hora'] === "7 - 8"){
          this.Total78P1 = parseInt(x['NumInteracciones1']);
          this.Total78P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "8 - 9"){
          this.Total89P1 = parseInt(x['NumInteracciones1']);
          this.Total89P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "9 - 10"){
          this.Total910P1 = parseInt(x['NumInteracciones1']);
          this.Total910P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "10 - 11"){
          this.Total1011P1 = parseInt(x['NumInteracciones1']);
          this.Total1011P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "11 - 12"){
          this.Total1112P1 = parseInt(x['NumInteracciones1']);
          this.Total1112P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "12 - 13"){
          this.Total1213P1 = parseInt(x['NumInteracciones1']);
          this.Total1213P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "13 - 14"){
          this.Total1314P1 = parseInt(x['NumInteracciones1']);
          this.Total1314P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "14 - 15"){
          this.Total1415P1 = parseInt(x['NumInteracciones1']);
          this.Total1415P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "15 - 16"){
          this.Total1516P1 = parseInt(x['NumInteracciones1']);
          this.Total1516P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "16 - 17"){
          this.Total1617P1 = parseInt(x['NumInteracciones1']);
          this.Total1617P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "17 - 18"){
          this.Total1718P1 = parseInt(x['NumInteracciones1']);
          this.Total1718P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "18 - 19"){
          this.Total1819P1 = parseInt(x['NumInteracciones1']);
          this.Total1819P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "19 - 20"){
          this.Total1920P1 = parseInt(x['NumInteracciones1']);
          this.Total1920P2 = parseInt(x['NumInteracciones2']);
        }

        if(x['Hora'] === "20 - 21"){
          this.Total2021P1 = parseInt(x['NumInteracciones1']);
          this.Total2021P2 = parseInt(x['NumInteracciones2']);
        }
      
      }

      this.chartDatasets = [
        { 
          data:
            [
              this.Total78P1,
              this.Total89P1,
              this.Total910P1,
              this.Total1011P1,
              this.Total1112P1,
              this.Total1213P1,
              this.Total1314P1,
              this.Total1415P1,
              this.Total1516P1,
              this.Total1617P1,
              this.Total1718P1,
              this.Total1819P1,
              this.Total1920P1,
              this.Total2021P1,
              this.Total2122P1,
              this.Total2223P1,
              //this.InteraccionesPasillo1.toString()
            ], label: 'Pasillo 1'
        },
        {
            data: 
            [
              this.Total78P2,
              this.Total89P2,
              this.Total910P2,
              this.Total1011P2,
              this.Total1112P2,
              this.Total1213P2,
              this.Total1314P2,
              this.Total1415P2,
              this.Total1516P2,
              this.Total1617P2,
              this.Total1718P2,
              this.Total1819P2,
              this.Total1920P2,
              this.Total2021P2,
              this.Total2122P2,
              this.Total2223P2,
            ], label: 'Pasillo 2'
        }
    ]

    });
  }

  public chartType:string = 'line';

  public chartDatasets:Array<any> = [{
    data: [], label: 'Pasillo 1'
    },{
    data: [], label: 'Pasillo 2'
  }];

  //public chartLabels:Array<any> = ['1 - 10 H'];

  public chartLabels:Array<any> = ['7 - 8 H','8 - 9 H', '9 - 10 H', '10 - 11 H','11 - 12 H',
  '12 - 13 H', '13 - 14 H', '14 - 15','15 - 16 H', '16 - 17 H','17 - 18 H','18 - 19 H',
  '19 - 20 H','20 - 21 H'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(231,76,60,0)',
          borderColor: 'rgba(41,128,185,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(41,128,185,1)',
          //pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0)',
          borderColor: 'rgba(231,76,60,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(231,76,60,1)',
          //pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = {
      //responsive: true,
      legend: {
        display: true,
        position: 'bottom'
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            stepSize: 5,
            //display: true
          },
          //stacked: true,
          gridLines: {
            display: true
            //color: "rgba(255,99,132,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
  };

}
