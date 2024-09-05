import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PhonenumberPipe } from './PhoneNumber.pipe';
import { StatusPipe } from './Status.pipe';

@NgModule({
  declarations: [
    PhonenumberPipe,
    StatusPipe
  ],

  imports: [
    CommonModule
  ],

  exports: [
    PhonenumberPipe,
    StatusPipe,
    DatePipe,
  ]
})
export class PipesModule { }
