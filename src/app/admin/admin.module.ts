import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule
  ]
})
export class AdminModule { }
