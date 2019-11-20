import { Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

// import { CalendarComponent } from './calendar.component';

export const AdminRoutes: Routes = [{
    path: '',
    children: [{
        path: 'profile',
        component: AdminProfileComponent
    }]
}];
