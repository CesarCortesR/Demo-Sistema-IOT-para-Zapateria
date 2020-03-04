import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelControlComponent } from './oit/panel-control/panel-control.component';
import { VisitasNegocioComponent } from './oit/visitas-del-negocio/visita-del-negocio.component';
import { ComportamientoComponent } from './oit/comportamiento/comportamiento.component';

const appRoutes: Routes = [
  { path: '', component: PanelControlComponent },
  { path: 'oit-visitas-negocio',component:  VisitasNegocioComponent},
  { path: 'oit-panel-control',component:  PanelControlComponent},
  { path: 'oit-comportamiento',component:  ComportamientoComponent}
];

export const appRoutingProviders:any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
