import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { ProdottoComponent } from './addprodotto/prodotto.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { DettagliComponent } from './dettagli/dettagli.component';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
              path: 'prodotto',
              component: ProdottoComponent
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
        path: '**',
        redirectTo: '/dashboard'
    }
];
