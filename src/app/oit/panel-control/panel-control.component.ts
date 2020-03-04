import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/service.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Sensores } from '../../modelos/modelos';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.scss']
})
export class PanelControlComponent implements OnInit {

  ListaSensores: Sensores[];

  ArregloSensorPrecensia: string[] = new Array;
  ArregloSensorPrecensiaActivo: string[] = new Array;
  ArregloSensorPrecensiaDesactivado: string[] = new Array;
  TotalSensoresPrecencia: number;
  SensoresPresenciaActivados: number = 0;
  SensoresPresenciaDesactivados: number = 0;

  ArregloSensorMovimiento: string[] = new Array;
  ArregloSensoresMovimientoActivados: string[] = new Array;
  TotalSensoresMovimiento: number = 0;
  SensoresMovimientoActivos: number = 0;
  ArregloSensoresMovimientoDesactivado: string[] = new Array;
  SensoresMovimientoDesactivados: number = 0;

  ArregloTotalServos: string[] = new Array;
  TotalServos: number = 0;
  ArregloServo: string[] = new Array();
  ArregloServoActivados: string[] = new Array;
  ArregloServoDesactivado: string[] = new Array;
  ServosActivados: number = 0;
  ServosDesactivados: number = 0;

  ArregloTodosSensores: string[] = new Array;
  TotalSensores: number = 0;

  ArregloMicrofonos: string[] = new Array;
  TotalMicrofonos: number = 0;
  ArregloMicronofonsActivos: string[] = new Array;
  TotalMicrofonosActivos: number = 0;

  constructor(
    public Metodos: Servicios,
    public Firebase: AngularFireDatabase
  ) {
  }

  ngOnInit() {
    this.Metodos.ObtenerListaSensores().snapshotChanges().subscribe(
      item => {
        this.ListaSensores = [];
        this.ArregloSensorPrecensia = [];
        this.ArregloSensorPrecensiaActivo = [];
        this.ArregloSensorPrecensiaDesactivado = [];
        this.ArregloSensorMovimiento = [];
        this.ArregloSensoresMovimientoActivados = [];
        this.ArregloSensoresMovimientoDesactivado = [];
        this.ArregloTotalServos = [];
        this.ArregloServoActivados = [];
        this.ArregloServoDesactivado = [];
        this.ArregloTodosSensores = [];

        item.forEach(element => {
          let y: any = element.payload.toJSON();
          y["$key"] = element.key;
          this.ListaSensores.push(y);
        });

        for(var x of this.ListaSensores){
          if(x['Colocacion'] == 'Mostrador1' || x['Colocacion'] == 'Mostrador2'){
            this.ArregloSensorPrecensia.push(x['Colocacion']);
            this.TotalSensoresPrecencia = this.ArregloSensorPrecensia.length;

            if(x['Estado'] == 'Activado'){
              this.ArregloSensorPrecensiaActivo.push(x['Estado']);
              this.SensoresPresenciaActivados = this.ArregloSensorPrecensiaActivo.length;
            }
            
            if(x['Estado'] == 'Desactivado'){
              this.ArregloSensorPrecensiaDesactivado.push(x['Estado']);
              this.SensoresPresenciaDesactivados = this.ArregloSensorPrecensiaDesactivado.length;             
            }
          }

          if(x['Colocacion'] == 'Movimiento1' || x['Colocacion'] == 'Movimiento2'){
            this.ArregloSensorMovimiento.push(x['Colocacion']);
            this.TotalSensoresMovimiento = this.ArregloSensorMovimiento.length;

            if(x['Estado'] == 'Activado'){
              this.ArregloSensoresMovimientoActivados.push(x['Estado']);
              this.SensoresMovimientoActivos = this.ArregloSensoresMovimientoActivados.length;
            }

            if(x['Estado'] == 'Desactivado'){
              this.ArregloSensoresMovimientoDesactivado.push(x['Estado']);
              this.SensoresMovimientoDesactivados = this.ArregloSensoresMovimientoDesactivado.length;
            }
          }
          
          if(x['Colocacion'] == 'Puerta'){
            this.ArregloTotalServos.push(x['Colocacion']);
            this.TotalServos = this.ArregloTotalServos.length;

            if(x['Estado'] == 'Activado'){
              this.ArregloServoActivados.push(x['Estado']);
              this.ServosActivados = this.ArregloServoActivados.length;
            }

            if(x['Estado'] == 'Desactivado'){
              this.ArregloServoDesactivado.push(x['Estado']);
              this.ServosDesactivados = this.ArregloServoDesactivado.length;
            }
          }

          if(x['TipoSensor']){
            this.ArregloTodosSensores.push(x['TipoSensor']);
            this.TotalSensores = this.ArregloTodosSensores.length;
          }

        }

      });   
    }

    ApagarSensor($key: string, Sensor: string){
      var CambioEstado = '';

      if(Sensor == 'Activado'){
        CambioEstado = 'Desconectado'  
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }

      if(Sensor == 'Desconectado'){
        CambioEstado = 'Activado'  
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }

      if(Sensor == 'Abrir'){
        CambioEstado = 'Cerrado'  
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }

      if(Sensor == 'Cerrado'){
        CambioEstado = 'Abrir'  
        this.Metodos.ActualizarEstadoSensor($key, CambioEstado);
      }
    }

    AntesActualizarSensor(Sensor: Sensores){
      this.Metodos.SensorSeleccionado = Object.assign({}, Sensor);
    }

    AntesDeBorrar($key: string){
      if(confirm('¿Estas seguro que deseas borrar el Sensor?')) {
        this.Metodos.BorrarRegistroListaSensores($key);
      }
    }

}
