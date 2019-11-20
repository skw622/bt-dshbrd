import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

// import { CalendarComponent } from './calendar.component';

export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'profile',
        component: UserComponent
    }]
}];
