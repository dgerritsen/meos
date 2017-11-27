import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PersonComponent } from './person/person.component';
import { MainComponent } from './main/main.component';
import { VnavComponent } from './vnav/vnav.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {VnavItemComponent} from "app/vnav/vnav-item.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonComponent,
    MainComponent,
    VnavComponent,
    VnavItemComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
