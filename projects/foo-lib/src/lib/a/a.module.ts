import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from './a1/a1.component';
import { A1RoutingModule } from './a.routing';
import { AService } from './a.service';

@NgModule({
  declarations: [
    A1Component
  ],
  imports: [ CommonModule, A1RoutingModule ],
  exports: [],
  providers: [],
})
export class AModule {}