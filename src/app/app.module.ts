import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
//import { MDBSpinningPreloader } from './typescripts/pro/index';
import { VisitasNegocioComponent } from './oit/visitas-del-negocio/visita-del-negocio.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment} from '../environments/environment';

// Rutas
import { routing, appRoutingProviders } from './app.routing';
import { PanelControlComponent } from './oit/panel-control/panel-control.component';

// Componentes OIT - Panel Cntrol
import { GraficaChicaMostrador } from './componentes/grafica_mostrador/grafica.mostrador.component';
import { GraficaChicaAlmacen } from './componentes/grafica_almacen/grafica.almacen.component';
import { GraficaBarraVisitas } from './componentes/grafica_barra_visitas/grafica.barra.visitas.component';
import { GraficaBarraVisitasClientes } from './componentes/grafica_barra_visitas_clientes/grafica.barra.visitas.clientes.component';
import { NumeroPersonaVistanNegocio } from './componentes/grafica_numero_personas_vistan_negocio/grafica.numero.personas.visitan.negocio.component';

// Componentes OIT - Visitas
import { EstadoSensor } from './componentes/estado_sensor/estado.sensor.component';
import { ComportamientoComponent } from './oit/comportamiento/comportamiento.component';
import { GraficaTipoClientesInteractuanComponent } from './componentes/grafica_tipo_clientes_interactuan/grafica.tipo.clientes.interactuan.component';
import { GraficaInteraccionPasillosComponent } from './componentes/grafica-interaccion-pasillos/grafica-interaccion-pasillos.component';

// Servicios
import { Servicios } from './servicios/service.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    PanelControlComponent,
    VisitasNegocioComponent,
    GraficaBarraVisitas,
    GraficaBarraVisitasClientes,
    NumeroPersonaVistanNegocio,
    EstadoSensor,
    ComportamientoComponent,
    GraficaTipoClientesInteractuanComponent,
    GraficaInteraccionPasillosComponent,
    GraficaChicaMostrador,
    GraficaChicaAlmacen
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    ToastModule.forRoot(),
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'key'
    })
  ],
  providers: [Servicios,appRoutingProviders],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
