import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Clientes, Ciudad, usuarios } from '../../modelos/modelos';
import { marker } from '../../modelos/mapa';
import { Servicios } from '../../servicios/service.service';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-panel-control',
  templateUrl: 'visita-del-negocio.component.html',
  styleUrls: ['../panel-control/panel-control.component.scss']
})
export class VisitasNegocioComponent implements OnInit {

  ListaClientes: Clientes[];
  ListaCiudades: Ciudad[];
  ListaUsuario: usuarios[];

  
  ListaEdades: usuarios[];
  ListaMarcadoresCiudad: Clientes[];
  ArregloSexo: string[] = new Array();
  ArregloSexoHombre: string[] = new Array;
  ArregloSexoMujer: string[] = new Array;
  ArregloMexico: string[] = new Array;
  ArregloCiudades: string[]= new Array;
  ArregloVisitaCiudades: string[] = new Array;

  Total: number = 0;
  TotalHombres: number = 0;
  TotalMujeres: number = 0;

  OperacionHombre: any;
  OperacionMujer: any;

  TotalMexico: number = 0;

  ArregloPuntoPozaRica: number[] = new Array();
  Total2: number = 0;
  markers: marker[] = new Array();
  lat: any;
  lng: any;
  latMapa = 23.3143515;
  lngMapa = -111.6390643;
  content: any;
  population: any;

  ArregloContadorVisitaClientes: number[] = new Array();
  ContadorVisitas: number = 0;
  ArregloContadorClientes: number[] = new Array();
  ContadorClientes: number = 0;

  // Dia Anterior

  ObtenerDiaAnterior: any[] = new Array();
  OperacionParaDiaActualBaja: number = 0;
  OperacionParaDiaActualSube: number = 0;
  DiaAnterior: number = 0;
  VisitaSube: number = 0;
  VisitaBaja: number = 0;

  constructor(
    public _Servicios: Servicios,
    public Firebase: AngularFireDatabase) { }

  ngOnInit() {
      this.a();
  }

  a() {
    this._Servicios.ObtenerRegistroClientes().snapshotChanges().subscribe(
      item => {
        this.ListaUsuario = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListaUsuario.push(x);
        })
      });

    this._Servicios.ObtenerEstadoDiaAnterior().snapshotChanges().subscribe(
      item => {
        this.ObtenerDiaAnterior = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ObtenerDiaAnterior.push(x);
        });
        
        for(let y of this.ObtenerDiaAnterior){
          if(y['DiaAnterior']){
            this.DiaAnterior = y['DiaAnterior'];

            this.OperacionParaDiaActualBaja = 100 - ((this.ContadorVisitas / this.DiaAnterior) * 100);
            this.OperacionParaDiaActualSube = 100 - ((this.DiaAnterior / this.ContadorVisitas) * 100);

            if(this.ContadorVisitas < this.DiaAnterior){
              this.VisitaBaja = this.OperacionParaDiaActualBaja;
            }

            if(this.ContadorVisitas > this.DiaAnterior){
              this.VisitaSube = Math.round(this.OperacionParaDiaActualSube);
            }
          }
        }
      });
      
    this.VisitasMarcadores();
  }

  VisitasMarcadores(){
    this._Servicios.ObtenerRegistroClientes().snapshotChanges()
    .subscribe(item => {
      this.ListaUsuario = [];
      this.ListaEdades = [];
      this.ListaMarcadoresCiudad = [];
      item.forEach(element => {
        let x: any = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListaEdades.push(x);
        this.ListaUsuario.push(x);
        this.ListaMarcadoresCiudad.push(x);
        this.ArregloContadorVisitaClientes.push(parseInt(x['numerovisitas']));
      });

      this._Servicios.ObtenerCiudad().snapshotChanges()
      .subscribe(item => {
        this.ListaCiudades = [];
        item.forEach(element => {
          let x: any = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListaCiudades.push(x);
        });

      for(var i = 0; i < this.ArregloContadorVisitaClientes.length; i++){
        this.ArregloContadorVisitaClientes[i];
        this.ContadorVisitas = this.ContadorVisitas + this.ArregloContadorVisitaClientes[i];
      }

      for(var y of this.ListaEdades){
        if(parseInt(y['numerocompras']) >= 1){
          this.ArregloContadorClientes.push(parseInt(y['numerocompras']));
          this.ContadorClientes = this.ArregloContadorClientes.length;
        }

        if(y['sexo']){
          this.ArregloSexo.push(y['sexo']);
          this.Total = this.ArregloSexo.length;
          
          if(y['sexo'] == 'Hombre'){
              this.ArregloSexoHombre.push(y['sexo']);
              this.TotalHombres = this.ArregloSexoHombre.length;
          }

          this.OperacionHombre = Math.round((this.TotalHombres/this.Total) * 100);

          if(y['sexo'] == 'Mujer'){
              this.ArregloSexoMujer.push(y['sexo']);
              this.TotalMujeres = this.ArregloSexoMujer.length;
          }

          this.OperacionMujer = Math.round((this.TotalMujeres/this.Total) * 100);
        }
      }
      
      for(var n of this.ListaCiudades){
        for(var m of this.ListaUsuario){

          if(m['municipio'] == n['Ciudad']){
            
            if(m['municipio'] == "Mexico"){
              this.ArregloMexico.push(m['municipio']);
              this.TotalMexico = this.ArregloMexico.length;
            }
          }

          if(n['Ciudad'] == m['municipio']){

            var Ciudad = [];

              Ciudad = [
                {
                  lat: parseFloat(n['Lat']),
                  lng: parseFloat(n['Lng']),
                  content: n['Ciudad']
                }];

                this.markers.push(Ciudad[0]);
                continue;
          }
        }
      }


      });
    });
  }

  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      content: '1'
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

}
