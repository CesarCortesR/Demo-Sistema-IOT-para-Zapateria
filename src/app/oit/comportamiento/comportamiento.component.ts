import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Registro, Sensores, IntervalosInteraccionPasillos } from '../../modelos/modelos';
import { Servicios } from '../../servicios/service.service';

@Component({
  selector: 'app-comportamiento',
  templateUrl: './comportamiento.component.html',
  styleUrls: ['../panel-control/panel-control.component.scss']
})
export class ComportamientoComponent implements OnInit {

  // Interacciones

  IntervalosInteraccionPasillos: IntervalosInteraccionPasillos[];
  ListaSensores: Sensores[];
  RegistroZapatos: Registro[];

  ArregloIteracciones: number[] = new Array();
  TotalIteraccionesMarca: number;

  Presencia: number;
  Iteracion: number;
  Llave: string;

  // Tipo Persona

  IteraccionCaballero: number | undefined = 0;
  IteraccionDama: number | undefined = 0;
  IteraccionNinos: number | undefined = 0;
  IteraccionNinas: number | undefined = 0;

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase) {
    }

  ngOnInit() {
    this.Sensores();
    this.InteraccionTipoPersona();
  }

  Sensores(){
    this.Metodos.ObtenerListaSensores().snapshotChanges()
        .subscribe(item => {
          this.ListaSensores = [];
          item.forEach(element => {
            let y: any = element.payload.toJSON();
            y["$key"] = element.key;
            this.ListaSensores.push(y);
          });

          this.Metodos.ObtenerZapatosMostrador().snapshotChanges().subscribe(item => {
          this.RegistroZapatos = [];
            item.forEach(element => {
              let y: any = element.payload.toJSON();
              y["$key"] = element.key;
            this.RegistroZapatos.push(y);
          });
          
          this.Metodos.ObtenerIntervalosInteraccionPasillos().snapshotChanges().subscribe(item => {
            this.IntervalosInteraccionPasillos = [];
              item.forEach(element => {
                let y: any = element.payload.toJSON();
                y["$key"] = element.key;
              this.IntervalosInteraccionPasillos.push(y);
            });
          
          for(var a of this.ListaSensores){
            for(var x of this.RegistroZapatos){
              if(a['Colocacion'] === x['Colocacion']){
                  if(parseInt(a['Presencia']) === 1){
                    this.Metodos.ActualizarInteraccionesSensor(a['$key'],
                    parseInt(a['Interacciones']));
                    this.Metodos.ActualizarInteraccionesMarca(x['$key'], parseInt(a['Interacciones']) + 1,
                    parseInt(a['Interacciones']) + 1);                    
                }
              }
            }

            // Sensor Movimiento

            var Hora = new Date();
            var HoraInteraccionPasiilo: string = Hora.getHours() + "." + Hora.getMinutes();

            for(var y of this.IntervalosInteraccionPasillos){            

              if(a['Colocacion'] === "Movimiento1"){
                if(parseInt(a['Presencia']) === 1){
                  this.Metodos.ActualizarInteraccionesSensor(a['$key'],
                  parseInt(a['Interacciones']));

                if(parseFloat(HoraInteraccionPasiilo) > 7 && parseFloat(HoraInteraccionPasiilo) <= 8){
                  if(y['Hora'] === "7 - 8"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }
                  
                if(parseFloat(HoraInteraccionPasiilo) > 8 && parseFloat(HoraInteraccionPasiilo) <= 9){
                  if(y['Hora'] === "8 - 9"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 9 && parseFloat(HoraInteraccionPasiilo) <= 10){
                  if(y['Hora'] === "9 - 10"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 10 && parseFloat(HoraInteraccionPasiilo) <= 11){
                  if(y['Hora'] === "10 - 11"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 11 && parseFloat(HoraInteraccionPasiilo) <= 12){
                  if(y['Hora'] === "11 - 12"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 12 && parseFloat(HoraInteraccionPasiilo) <= 13){
                  if(y['Hora'] === "12 - 13"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 13 && parseFloat(HoraInteraccionPasiilo) <= 14){
                  if(y['Hora'] === "13 - 14"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 14 && parseFloat(HoraInteraccionPasiilo) <= 15){
                  if(y['Hora'] === "14 - 15"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 15 && parseFloat(HoraInteraccionPasiilo) <= 16){
                  if(y['Hora'] === "15 - 16"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 16 && parseFloat(HoraInteraccionPasiilo) <= 17){
                  if(y['Hora'] === "16 - 17"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 17 && parseFloat(HoraInteraccionPasiilo) <= 18){
                  if(y['Hora'] === "17 - 18"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 18 && parseFloat(HoraInteraccionPasiilo) <= 19){
                  if(y['Hora'] === "18 - 19"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 19 && parseFloat(HoraInteraccionPasiilo) <= 20){
                  if(y['Hora'] === "19 - 20"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                if(parseFloat(HoraInteraccionPasiilo) > 20 && parseFloat(HoraInteraccionPasiilo) <= 21){
                  if(y['Hora'] === "20 - 21"){
                  var NumInteracciones1 = y['NumInteracciones1'] + 1;
                  var NumInteracciones2 = y['NumInteracciones2'];
                  this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                  }
                }

                }
              }

              // Sensor Movimiento 2

              if(a['Colocacion'] === "Movimiento2"){
                if(parseInt(a['Presencia']) === 1){
                  this.Metodos.ActualizarInteraccionesSensor(a['$key'],
                  parseInt(a['Interacciones']));

                  if(parseFloat(HoraInteraccionPasiilo) > 7 && parseFloat(HoraInteraccionPasiilo) <= 8){
                    if(y['Hora'] === "7 - 8"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
                    
                  if(parseFloat(HoraInteraccionPasiilo) > 8 && parseFloat(HoraInteraccionPasiilo) <= 9){
                    if(y['Hora'] === "8 - 9"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 9 && parseFloat(HoraInteraccionPasiilo) <= 10){
                    if(y['Hora'] === "9 - 10"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 10 && parseFloat(HoraInteraccionPasiilo) <= 11){
                    if(y['Hora'] === "10 - 11"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 11 && parseFloat(HoraInteraccionPasiilo) <= 12){
                    if(y['Hora'] === "11 - 12"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 12 && parseFloat(HoraInteraccionPasiilo) <= 13){
                    if(y['Hora'] === "12 - 13"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 13 && parseFloat(HoraInteraccionPasiilo) <= 14){
                    if(y['Hora'] === "13 - 14"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 14 && parseFloat(HoraInteraccionPasiilo) <= 15){
                    if(y['Hora'] === "14 - 15"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 15 && parseFloat(HoraInteraccionPasiilo) <= 16){
                    if(y['Hora'] === "15 - 16"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 16 && parseFloat(HoraInteraccionPasiilo) <= 17){
                    if(y['Hora'] === "16 - 17"){
                    var NumInteracciones1 = y['NumInteracciones1'] + 1;
                    var NumInteracciones2 = y['NumInteracciones2'];
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 17 && parseFloat(HoraInteraccionPasiilo) <= 18){
                    if(y['Hora'] === "17 - 18"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 18 && parseFloat(HoraInteraccionPasiilo) <= 19){
                    if(y['Hora'] === "18 - 19"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 19 && parseFloat(HoraInteraccionPasiilo) <= 20){
                    if(y['Hora'] === "19 - 20"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }
  
                  if(parseFloat(HoraInteraccionPasiilo) > 20 && parseFloat(HoraInteraccionPasiilo) <= 21){
                    if(y['Hora'] === "20 - 21"){
                    var NumInteracciones1 = y['NumInteracciones1'];
                    var NumInteracciones2 = y['NumInteracciones2'] + 1;
                    this.Metodos.ActualizarNumeroInteraccionesGraficaPasillos(y['$key'], NumInteracciones1, NumInteracciones2);
                    }
                  }

                }
              }

            }
          }
        });
      });      
    });
  }

  InteraccionTipoPersona(){
    this.Metodos.ObtenerZapatosMostrador().snapshotChanges().subscribe(item => {
      this.RegistroZapatos = [];
        item.forEach(element => {
          let y: any = element.payload.toJSON();
          y["$key"] = element.key;
        this.RegistroZapatos.push(y);
      });

      for(var x of this.RegistroZapatos){
        if(x['TipoPersona'] == "Caballero"){
          this.IteraccionCaballero = x['IteraccionesTipoPersona'];
        }

        if(x['TipoPersona'] == "Dama"){
          this.IteraccionDama = x['IteraccionesTipoPersona'];
        }

        if(x['TipoPersona'] == "Ninos"){
          this.IteraccionNinos = x['IteraccionesTipoPersona'];
        }

        if(x['TipoPersona'] == "Ninas"){
          this.IteraccionNinas = x['IteraccionesTipoPersona'];
        }

      }

    });
  }

}
