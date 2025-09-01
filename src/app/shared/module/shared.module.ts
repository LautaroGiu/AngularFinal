import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '../pipes/fullname.pipe';

@NgModule({
  imports: [CommonModule, FullnamePipe],
  exports: [
    FullnamePipe 
  ]
})
export class SharedModule {}
