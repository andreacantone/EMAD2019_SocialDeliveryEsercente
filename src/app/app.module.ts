import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import {MatListModule} from '@angular/material';
import { FullComponent } from './layouts/full/full.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ProdottoComponent } from './addprodotto/prodotto.component';
import { MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { SpinnerComponent } from './shared/spinner.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { DettagliComponent } from './dettagli/dettagli.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};

@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        BreadcrumbComponent,
        SidebarComponent,
        ProdottoComponent,
        SpinnerComponent,
        RegistrazioneComponent,
        LoginComponent,
        OrdiniComponent,
        DettagliComponent

    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule.forRoot(Approutes),
        PerfectScrollbarModule,
        ChartsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule,
        MatListModule
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
