import { Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';


// import { CalendarComponent } from './calendar.component';

export const PatientRoutes: Routes = [{
    path: '',
    children: [{
        path: 'list',
        component: PatientsComponent
    }]
}];
