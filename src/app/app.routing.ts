import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        },{
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        },{
            path: 'maps',
            loadChildren: './maps/maps.module#MapsModule'
        },{
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule'
        },{
            path: 'calendar',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
        },{
            path: '',
            loadChildren: './widgets/widgets.module#WidgetsModule'
        },
        {
            path: '',
            loadChildren: './home/home.module#HomeModule'
        },
        {
            path: 'admin',
            loadChildren: './admin/admin.module#AdminModule'
        },
        {
            path: 'user',
            loadChildren: './user/user.module#UserModule'
        },
        {
            path: 'patient',
            loadChildren: './patient/patient.module#PatientModule'
        }]
        },{
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'auth',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
