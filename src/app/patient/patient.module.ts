import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientRoutes } from './patient.routing';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import {ModalModule} from 'ng2-bootstrap/modal';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PatientRoutes),
    GridModule,
    DateInputsModule,
    IntlModule,
    ModalModule.forRoot()
  ]
})
export class PatientModule { }
