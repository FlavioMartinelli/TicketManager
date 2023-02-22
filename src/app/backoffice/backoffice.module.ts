import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { CheckingComponent } from './checking/checking.component';



@NgModule({
  declarations: [
    BackofficeComponent,
    CheckingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackofficeModule { }
