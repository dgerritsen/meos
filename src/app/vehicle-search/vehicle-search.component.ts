import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ErrorStateMatcher, MatExpansionModule, MatInputModule, MatOptionModule,
  MatTabChangeEvent
} from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import { HeaderactionService } from '../headeraction.service';

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
export class VehicleSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('autofocus') private elementRef: ElementRef;

  allVehicles;
  sub;
  selectedTab = 0;
  panelOpenState: boolean = false;
  MatAccordionDisplayMode

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
    private matExpansion: MatExpansionModule,
    private restangular: Restangular,
    private cd: ChangeDetectorRef,
    private headeractionService: HeaderactionService
  ) { }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);

    if (tabChangeEvent.index === 0) {
      this.headeractionService.setHeaderActionIcon('search');
      this.selectedTab = 0;
    } else if (tabChangeEvent.index === 1) {
      this.headeractionService.setHeaderActionIcon('save');
      this.selectedTab = 1;
    } else {
      this.headeractionService.setHeaderActionIcon('');
      this.selectedTab = 2;
    }

  };


  ngOnInit() {
    this.allVehicles = this.restangular.all('vehicles').getList();
    // vehicles.getList().subscribe(v => {
    //   this.allVehicles = v;
    //   console.log(v);
    // });

    this.headeractionService.setHeaderActionIcon('search');

    this.sub = this.headeractionService.buttonPressed$.subscribe(pressed => {
      console.log('button pressed', pressed);
      console.log('search: ', this.plateFormControl.value);
      this.selectedTab = 2;
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    this.headeractionService.setHeaderActionIcon('');
    this.sub.unsubscribe();
  }


}
