import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Registro } from '../../modelos/modelos';
import { Servicios } from '../../servicios/service.service';

@Component({
  selector: 'app-grafica-tipo-clientes-interactuan',
  templateUrl: './grafica_tipo_clientes_interactuan_component.html',
  styleUrls: ['./grafica.tipo.clientes.interactuan.component.scss']
})
export class GraficaTipoClientesInteractuanComponent implements OnInit {

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.InteraccionTipoPersona();
  }

  // Tipo Persona

  RegistroZapatos: Registro[];

  ArregloCaballeros: any[] = new Array;
  TotalCaballeros: number = 0;

  ArregloDama: any[] = new Array;
  TotalDama: number = 0;

  ArregloNinos: any[] = new Array;
  TotaNinos: number = 0;

  ArregloNinas: any[] = new Array;
  TotalNinas: number = 0;

  ArregloTotalTiposPersona: any = new Array();

  InteraccionTipoPersona(){
    this.Metodos.ObtenerZapatosMostrador().snapshotChanges().subscribe(item => {
      this.RegistroZapatos = [];
        item.forEach(element => {
          let y: any = element.payload.toJSON();
          y["$key"] = element.key;
        this.RegistroZapatos.push(y);
      });

      //console.log(this.RegistroZapatos);

      for(var x of this.RegistroZapatos){
        if(x['TipoPersona'] == "Caballero"){
          this.ArregloCaballeros.push(x['TipoPersona']);
          this.TotalCaballeros = this.ArregloCaballeros.length;
        }

        if(x['TipoPersona'] == "Dama"){
          this.ArregloDama.push(x['TipoPersona']);
          this.TotalDama = this.ArregloDama.length;
        }

        if(x['TipoPersona'] == "Nino"){
          this.ArregloNinos.push(x['TipoPersona']);
          this.TotaNinos = this.ArregloNinos.length;
        }

        if(x['TipoPersona'] == "Nina"){
          this.ArregloNinas.push(x['TipoPersona']);
          this.TotalNinas = this.ArregloNinas.length;
        }

      }

      this.ArregloTotalTiposPersona.push(this.TotalCaballeros);
      this.ArregloTotalTiposPersona.push(this.TotalDama);
      this.ArregloTotalTiposPersona.push(this.TotaNinos);
      this.ArregloTotalTiposPersona.push(this.TotalNinas);

      //console.log(this.TotalCaballeros);

      this.chartData = this.ArregloTotalTiposPersona;
    });
  }

  public chartType:string = 'pie';

    public chartData:Array<any> = [
      //console.log(this.chartData)
    ];

    public chartLabels:Array<any> = ['Caballero', 'Dama', 'Niños', 'Niñas'];

    public chartColors:Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
        hoverBorderWidth: 0,
        backgroundColor: [ "#4D5360" ,"#F7464A", "#FDB45C", "#46BFBD"],
        hoverBackgroundColor: ["#5e6573", "#fd5357", "#ffbb68", "#50c7c6"]
    }];

    public chartOptions:any = {
        responsive: true,
        legend: {
          display: false,
        }
    };

}
