import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PersonComponent } from './person/person.component';
import { MainComponent } from './main/main.component';
import { VnavComponent } from './vnav/vnav.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {VnavItemComponent} from 'app/vnav/vnav-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import {
  ErrorStateMatcher, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatOptionModule,
  MatSelectModule, MatSnackBarModule,
  MatTabsModule, MatToolbarModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { PersonNaturalComponent } from './person-natural/person-natural.component';
import { AdministrateComponent } from './administrate/administrate.component';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { AnprComponent } from './anpr/anpr.component';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://meospapi.herokuapp.com/');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Token 4dcfe376abef0197a3c071bf4b7eb85c42f5594e'});
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonComponent,
    MainComponent,
    VnavComponent,
    VnavItemComponent,
    VehicleComponent,
    VehicleSearchComponent,
    PersonNaturalComponent,
    AdministrateComponent,
    AnprComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatCheckboxModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        data: {
          title: 'Meos'
        }
      },
      {
        path: 'person',
        component: PersonComponent,
        data: {
          title: 'Personen toevoegen'
        }
      },
      {
        path: 'person-natural',
        component: PersonNaturalComponent,
        data: {
          title: 'Persoon'
        }
      },
      {
        path: 'vehicle',
        component: VehicleComponent,
        data: {
          title: 'Vervoermiddel'
        }
      },
      {
        path: 'vehicle-search',
        component: VehicleSearchComponent,
        data: {
          title: 'Kenteken'
        }
      },
      {
        path: 'administrate',
        component: AdministrateComponent,
        data: {
          title: 'Afhandelen'
        }
      },
      {
        path: 'anpr',
        component: AnprComponent,
        data: {
          title: 'ANPR'
        }
      }
    ]),
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
