import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import { Registro, ZapatoMostrador, Sensores, ContadorMarca } from '../modelos/modelos';

@Injectable()
export class Servicios {

  ListaRegistrosTabla: AngularFireList<any>;
  ListaRegistrosGraficaAzul: AngularFireList<any>;
  ListaRegistrosZapatoMostrador: AngularFireList<any>;
  ListaSensores: AngularFireList<any>;
  ListaClientes: AngularFireList<any>;
  ListaClientesTemporal: AngularFireList<any>;
  ListaCiudad: AngularFireList<any>;
  DiaAnterior: AngularFireList<any>;
  ListaTablaSensores2: AngularFireList<any>;
  ListaTablaContadorMarcadores: AngularFireList<any>;
  ListaHorasDiaActual: AngularFireList<any>;
  ListaGraficaHoraInteraccionPasillos: AngularFireList<any>;
  ListaSatisfaccionBueno: AngularFireList<any>;
  GraficaSatisfacciones: AngularFireList<any>;
  ListaIntervaloHoras: AngularFireList<any>;

  RegistroSeleccionado: Registro = new Registro();
  SensorSeleccionado: Sensores = new Sensores();
  CodigoCalzadoSeleccionado: ZapatoMostrador = new ZapatoMostrador();
  ContadorMarca: ContadorMarca = new ContadorMarca();

  constructor(private firebase: AngularFireDatabase) {}

  // Pagina Panel de Control

  ObtenerListaSensores(){
    this.ListaSensores = this.firebase.list('Sensores');
    return this.ListaSensores;
  }

  ObtenerListaTablaSensores2(){
    this.ListaTablaSensores2 = this.firebase.list('Sensores2');
    return this.ListaTablaSensores2;
  }

  BorrarRegistroListaSensores($key: string){
    this.ListaSensores.remove($key);
  }

  BorrarRegistroListaSensores2($key: string){
    this.ListaTablaSensores2.remove($key);
  }

  ActualizarEstadoSensor($key: string, estado: string){
    this.ListaSensores.update($key, {
      Estado: estado
    });
  }

  ActualizarEstadoSensor2($key: string, estado: string){
    this.ListaTablaSensores2.update($key, {
      Estado: estado
    });
  }

  // Comportamiento

  ObtenerZapatosMostrador(){
    this.ListaRegistrosZapatoMostrador = this.firebase.list('TablaMostrador',
    ref => ref.orderByChild('InteraccionesMarca'));
    return this.ListaRegistrosZapatoMostrador;
  }

  AgregarZapatoMostrador(AgregarMostrador: ZapatoMostrador){
    this.ListaRegistrosZapatoMostrador.push({
      CodigoCalzado: AgregarMostrador.CodigoCalzado,
      IDSensor: AgregarMostrador.IDSensor,
      Calzado: AgregarMostrador.Calzado,
      Marca: AgregarMostrador.Marca,
      TipoPersona: AgregarMostrador.TipoPersona,
      TipoCalzado: AgregarMostrador.TipoCalzado,
      Foto : AgregarMostrador.Foto,
      Color: AgregarMostrador.Color,
      Talla: AgregarMostrador.Talla,

      Colocacion: AgregarMostrador.Colocacion,
      InteraccionesMarca: AgregarMostrador.InteraccionesMarca,
      InteraccionesTipoCalzado: AgregarMostrador.InteraccionesTipoCalzado,
      IteraccionesTipoPersona: AgregarMostrador.IteraccionesTipoPersona
    });
    
  }

  ActualizarInteraccionesSensor($key: string, Interacciones: number){
    this.ListaSensores.update($key, {
      Interacciones: Interacciones + 1,
      Presencia: 0
    });
  }

  ActualizarInteraccionesMarca($key: string, Interacciones: number, TipoPersona: number){
    this.ListaRegistrosZapatoMostrador.update($key, {
      InteraccionesMarca: Interacciones,
      IteraccionesTipoPersona: TipoPersona
    });
  }

  ObtenerIntervalosInteraccionPasillos(){
    this.ListaGraficaHoraInteraccionPasillos = this.firebase.list('GraficaHoraInteraccionPasillos');
    return this.ListaGraficaHoraInteraccionPasillos;
  }

  ActualizarNumeroInteraccionesGraficaPasillos($key: string,NumeroInteracciones1: string, NumeroInteracciones2: string){
    this.ListaGraficaHoraInteraccionPasillos.update($key,{
      NumInteracciones1: NumeroInteracciones1,
      NumInteracciones2: NumeroInteracciones2
    })
  }

  // Visitas Negocio

  ObtenerRegistroClientes(){
    this.ListaClientes = this.firebase.list('usuarios');
    return this.ListaClientes;
  }

  ObtenerEstadoDiaAnterior(){
    this.DiaAnterior = this.firebase.list('VisitasDiaAnterior');
    return this.DiaAnterior;
  }

  ObtenerIntervaloHorasGraficaVisitaHoraDiaActual(){
    this.ListaIntervaloHoras = this.firebase.list('GraficaVisitaDiaActual');
    return this.ListaIntervaloHoras;
  }

  ObtenerCiudad(){
    this.ListaCiudad = this.firebase.list('Ciudad');
    return this.ListaCiudad;
  }
  
  ObtenerClientesTemporal(){
    this.ListaClientesTemporal = this.firebase.list('Temporal');
    return this.ListaClientesTemporal;
  }

  
}
