import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { Sensores } from '../../modelos/modelos';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
    selector: 'grafica-pastel-estado-sensor',
    templateUrl: 'estado.sensor.component.html',
})

export class EstadoSensor implements OnInit{

    ListaSensores: Sensores[];
    ArregloMostrador: string[] = new Array;
    TotalSensores: number[] = new Array();
    ArregloMovimiento: string[] = new Array;
    ArregloSensoresActivos: string[] = new Array;

    SumaTodosLosSensores: number = 0;
    TotalSensoresPrecencia: number = 0;
    TotalSensoresMovimiento: number = 0;
    TotalSensoresActivos: number = 0;

    ArregloTotalServos: string[] = new Array;
    TotalServos: number = 0;

    ArregloTotalMicrofonos: string[] = new Array;
    TotalMicrofonos: number = 0;

    public chartType:string = 'doughnut';

    public chartData:Array<any> = [];
    
    public chartLabels:Array<any> = ['Mostrador', 'Servo','Movimiento','Microfono'];

    public chartColors:Array<any> = [{
        hoverBorderWidth: 0,
        backgroundColor: ["#55d8fe", "#ff8373","#ffda83", "#a3a0fb"],
    }];

    public chartOptions:any = {
        responsive: true,
        legend: {
          display: false,
        }
    };


    constructor(public Metodos: Servicios,
    public Firebase: AngularFireDatabase) { }

    ngOnInit() {
        this.a();
    }

    a(){
        this.Metodos.ObtenerListaSensores().snapshotChanges().subscribe(item => {
            this.ListaSensores = [];
            this.ArregloSensoresActivos = [];
            this.ArregloMostrador = [];
            this.ArregloMovimiento = [];
            this.ArregloTotalServos = [];
            this.ArregloTotalMicrofonos = [];
            this.TotalSensores = [];
            item.forEach(element => {
                let x: any = element.payload.toJSON();
                x["$key"] = element.key;
                this.ListaSensores.push(x);
            });

            for(let x of this.ListaSensores){

                if(x['Estado'] == 'Activado' || x['Estado'] == 'Abrir'){
                    this.ArregloSensoresActivos.push(x['Estado']);
                    this.TotalSensoresActivos = this.ArregloSensoresActivos.length;
                }

                if(x['Colocacion'] == 'Mostrador1' || x['Colocacion'] == 'Mostrador2'){
                    this.ArregloMostrador.push(x['Colocacion']);
                    this.TotalSensoresPrecencia = this.ArregloMostrador.length;
                }

                if(x['Colocacion'] == 'Movimiento1' || x['Colocacion'] == 'Movimiento2'){
                    this.ArregloMovimiento.push(x['Colocacion']);
                    this.TotalSensoresMovimiento = this.ArregloMovimiento.length;
                }

                if(x['Colocacion'] == 'Puerta'){
                    this.ArregloTotalServos.push(x['Colocacion']);
                    this.TotalServos = this.ArregloTotalServos.length;
                }

                if(x['Colocacion'] == 'Provadores'){
                    this.ArregloTotalMicrofonos.push(x['Colocacion']);
                    this.TotalMicrofonos = this.ArregloTotalMicrofonos.length;
                }
            }

            this.TotalSensores.push(this.TotalSensoresPrecencia);
            this.TotalSensores.push(this.TotalServos);
            this.TotalSensores.push(this.TotalSensoresMovimiento);
            this.TotalSensores.push(this.TotalMicrofonos);

            this.chartData = this.TotalSensores;

            this.SumaTodosLosSensores = this.TotalSensores.length;
            });
      }
 
}
