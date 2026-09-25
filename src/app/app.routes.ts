import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Jefe } from './jefe/jefe';
import { Tecnico } from './tecnico/tecnico';
import { Personal } from './personal/personal';

import { Disponibilidad } from './jefe/disponibilidad/disponibilidad';
import { AsignarIncidencia } from './jefe/asignar-incidencia/asignar-incidencia';
import { EquiposComplicados } from './jefe/equipos-complicados/equipos-complicados';
import { IncidentesSolucionados } from './jefe/incidentes-solucionados/incidentes-solucionados';
export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'jefe',
    component: Jefe
  },
  {
    path: 'tecnico',
    component: Tecnico
  },
  {
    path: 'personal',
    component: Personal
  },
  {
    path: 'jefe/disponibilidad',
    component: Disponibilidad
  },

  {
    path: 'jefe/asignar-incidencia',
    component: AsignarIncidencia
  },

  {
    path: 'jefe/equipos-complicados',
    component: EquiposComplicados
  },

  {
    path: 'jefe/incidentes-solucionados',
    component: IncidentesSolucionados
  }
];