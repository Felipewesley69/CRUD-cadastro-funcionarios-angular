import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from './button/button.module';
import { PhonePipe } from './phone.pipe';



@NgModule({
  declarations: [
    PhonePipe
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    PhonePipe,
    ButtonComponent
  ]
})
export class SharedModule { }
