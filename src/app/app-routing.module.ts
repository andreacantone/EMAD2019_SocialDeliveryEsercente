import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { ProdottoComponent } from './addprodotto/prodotto.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { NegoziComponent } from './negozi/negozi.component';
import { AddNegozioComponent } from './addnegozio/addnegozio.component';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
              path: 'prodotto',
              component: ProdottoComponent
          },
      {
        path: 'ordini',
        component: OrdiniComponent
    },
    {
      path: 'dettagli',
      component: DettagliComponent
  },
        ]
    },
    {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent
},
{
  path: 'negozi',
  component: NegoziComponent
},
{
  path: 'addnegozio',
  component: AddNegozioComponent
},
    {
        path: '**',
        redirectTo: '/login'
    }
];
