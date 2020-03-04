import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { Clientes, usuarios } from '../../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
    selector: 'grafica-numero-personas-visitan-negocio',
    templateUrl: 'grafica.numero.personas.visitan.negocio.component.html',
})

export class NumeroPersonaVistanNegocio implements OnInit{

    ListaEdadesGrafica: Clientes[];
    ListaUsuario: usuarios[];

  // Variables para el sexo
  
  ListaEdades: usuarios[];

    ArregloEdadHombres1317: string[] = new Array();
    ArregloEdadHombres1824: string[] = new Array();
    ArregloEdadHombres2534: string[] = new Array();
    ArregloEdadHombres3544: string[] = new Array();
    ArregloEdadHombres4554: string[] = new Array();
    ArregloEdadHombres5564: string[] = new Array();
    ArregloEdadHombres65: string[] = new Array();
    ArregloEdadHombresGrafica: string[] = new Array();

    ArregloEdadMujeres1317: string[] = new Array();
    ArregloEdadMujeres1824: string[] = new Array();
    ArregloEdadMujeres2534: string[] = new Array();
    ArregloEdadMujeres3544: string[] = new Array();
    ArregloEdadMujeres4554: string[] = new Array();
    ArregloEdadMujeres5564: string[] = new Array();
    ArregloEdadMujeres65: string[] = new Array();

    TotalEdadHombres1317: number;
    TotalEdadHombres1824: number;
    TotalEdadHombres2534: number;
    TotalEdadHombres3544: number;
    TotalEdadHombres4554: number;
    TotalEdadHombres5564: number;
    TotalEdadHombres65: number;

    TotalEdadMujeres1317: number;
    TotalEdadMujeres1824: number;
    TotalEdadMujeres2534: number;
    TotalEdadMujeres3544: number;
    TotalEdadMujeres4554: number;
    TotalEdadMujeres5564: number;
    TotalEdadMujeres65: number;

    constructor(public Metodos: Servicios,
        public Firebase: AngularFireDatabase) { }

    ngOnInit() {
        this.VisitasSexo();
    }

    VisitasSexo(){
        this.Metodos.ObtenerRegistroClientes().snapshotChanges()
          .subscribe(item => {
            //this.ListaEdadesGrafica = [];
            this.ListaUsuario = [];
            item.forEach(element => {
              let x: any = element.payload.toJSON();
              x["$key"] = element.key;
              this.ListaUsuario.push(x);
            });
            
            //console.log(this.ListaEdadesGrafica);

            for(let x of this.ListaUsuario){
                    if(x['sexo'] == 'Hombre'){
                        if(x['edad'] >= '13' && x['edad'] <= '17'){
                            this.ArregloEdadHombres1317.push(x['edad']);
                            this.TotalEdadHombres1317 = this.ArregloEdadHombres1317.length;
                        }
                        
                        if(x['edad'] >= '18' && x['edad'] <= '24'){
                            this.ArregloEdadHombres1824.push(x['edad']);
                            this.TotalEdadHombres1824 = this.ArregloEdadHombres1824.length;                            
                        }

                        if(x['edad'] >= '25' && x['edad'] <= '34'){
                            this.ArregloEdadHombres2534.push(x['edad']);
                            this.TotalEdadHombres2534 = this.ArregloEdadHombres2534.length;                            
                        }

                        if(x['edad'] >= '35' && x['edad'] <= '44'){
                            this.ArregloEdadHombres3544.push(x['edad']);
                            this.TotalEdadHombres3544 = this.ArregloEdadHombres3544.length;                            
                        }

                        if(x['edad'] >= '45' && x['edad'] <= '54'){
                            this.ArregloEdadHombres4554.push(x['edad']);
                            this.TotalEdadHombres4554 = this.ArregloEdadHombres4554.length;                            
                        }

                        if(x['edad'] >= '55' && x['edad'] <= '64'){
                            this.ArregloEdadHombres5564.push(x['edad']);
                            this.TotalEdadHombres5564 = this.ArregloEdadHombres5564.length;                            
                        }

                        if(x['edad'] >= '65'){
                            this.ArregloEdadHombres65.push(x['edad']);
                            this.TotalEdadHombres65 = this.ArregloEdadHombres65.length;                            
                        }
                    }

                    if(x['sexo'] == 'Mujer'){
                        if(x['edad'] >= '13' && x['edad'] <= '17'){
                            this.ArregloEdadMujeres1317.push(x['edad']);
                            this.TotalEdadMujeres1317 = this.ArregloEdadMujeres1317.length;
                        }

                        if(x['edad'] >= '18' && x['edad'] <= '24'){
                            this.ArregloEdadMujeres1824.push(x['edad']);
                            this.TotalEdadMujeres1824 = this.ArregloEdadMujeres1824.length;
                        }

                        if(x['edad'] >= '25' && x['edad'] <= '34'){
                            this.ArregloEdadMujeres2534.push(x['edad']);
                            this.TotalEdadMujeres2534 = this.ArregloEdadMujeres2534.length;
                        }

                        if(x['edad'] >= '35' && x['edad'] <= '44'){
                            this.ArregloEdadMujeres3544.push(x['edad']);
                            this.TotalEdadMujeres3544 = this.ArregloEdadMujeres3544.length;
                        }

                        if(x['edad'] >= '45' && x['edad'] <= '54'){
                            this.ArregloEdadMujeres4554.push(x['edad']);
                            this.TotalEdadMujeres4554 = this.ArregloEdadMujeres4554.length;
                        }

                        if(x['edad'] >= '55' && x['edad'] <= '64'){
                            this.ArregloEdadMujeres5564.push(x['edad']);
                            this.TotalEdadMujeres5564 = this.ArregloEdadMujeres5564.length;
                        }

                        if(x['edad'] >= '65'){
                            this.ArregloEdadMujeres65.push(x['edad']);
                            this.TotalEdadMujeres65 = this.ArregloEdadMujeres65.length;
                        }
                    }
                

            }

            //console.log(this.ArregloEdadHombres1317);
            //console.log(this.ArregloEdadHombres1824);
            //console.log(this.ArregloEdadMujeres2534);
            //console.log(this.ArregloEdadHombresGrafica);

            /*console.log("Hombres con edad entre 13 - 17 " + this.TotalEdadHombres1317);
            console.log("Hombres con edad entre 18 - 24 " + this.TotalEdadHombres1824);

            console.log("Mujeres con edad entre 13 - 17 " + this.TotalEdadMujeres1317);
            console.log("Mujeres con edad entre 18 - 24 " + this.TotalEdadMujeres1824);*/

            this.chartDatasets = [
                { data:
                    [ this.TotalEdadHombres1317,
                      this.TotalEdadHombres1824,
                      this.TotalEdadHombres2534,
                      this.TotalEdadHombres3544,
                      this.TotalEdadHombres4554,
                      this.TotalEdadHombres5564,
                      this.TotalEdadHombres65
                    ]
                },
                {
                    data: 
                    [
                        this.TotalEdadMujeres1317,
                        this.TotalEdadMujeres1824,
                        this.TotalEdadMujeres2534,
                        this.TotalEdadHombres3544,
                        this.TotalEdadHombres4554,
                        this.TotalEdadHombres5564,
                        this.TotalEdadHombres65
                    ]
                }
            ]
          });
      }

    public chartType:string = 'bar';

    public chartDatasets:Array<any> = [
        {data: [], label: 'Hombres'},
        {data: [], label: 'Mujeres'}
    ];

    //public chartLabels:Array<any> = ['13 - 17', '18 - 24'];
    public chartLabels:Array<any> = ['13 - 17', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(41,128,185,1)',
            //borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'rgba(231,76,60,1)',
            //borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        }
    ];

    public chartOptions:any = {
        responsive: true,
        legend: {
          display: false
        },
        //maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function(value: number){
                        
                        return Number(value).toFixed(1) + ' %'
                    },
                  //stepSize: 5,
                  display: true
                },
                gridLines: {
                  display: true
                }
              }]
        }
        /*maintainAspectRatio: false,
        scales: {
            yAxes: [{
              ticks: {
                stepSize: 15,
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
          }*/
    }

}
