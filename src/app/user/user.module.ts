import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
