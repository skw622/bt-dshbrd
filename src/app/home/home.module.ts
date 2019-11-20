import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    GridModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }
