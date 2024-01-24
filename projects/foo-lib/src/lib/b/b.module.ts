import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { B1RoutingModule } from './b.routing';
import { B1Component } from './b1/b1.component';

@NgModule({
  declarations: [
    B1Component
  ],
  imports: [ CommonModule, B1RoutingModule ],
  exports: [],
  providers: [],
})
export class BModule {}