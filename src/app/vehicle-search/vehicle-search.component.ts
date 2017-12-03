import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher, MatInputModule, MatOptionModule } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';

/** Error when invalid control is dirty, touched, or submitted. */
export class InputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {

  allVehicles;

  plateFormControl = new FormControl('', [
    Validators.required,
  ]);

  countryFormControl = new FormControl('Nederland', [
    Validators.required,
  ]);

  platematcher = new InputErrorStateMatcher();
  countrymatcher = new InputErrorStateMatcher();

  constructor(
    private matTabs: MatTabsModule,
    private matFormField: MatFormFieldModule,
    private matInput: MatInputModule,
    private matOption: MatOptionModule,
    private restangular: Restangular
  ) { }


  ngOnInit() {
    const vehicles = this.restangular.all('vehicles');
    vehicles.getList().subscribe(v => {
      this.allVehicles = v;
    })
  }

}
