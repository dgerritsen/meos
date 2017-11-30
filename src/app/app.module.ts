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
  ErrorStateMatcher, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule,
  MatSelectModule,
  MatTabsModule, MatToolbarModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';

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
      }
    ]),
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
