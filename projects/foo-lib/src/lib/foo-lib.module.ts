import { NgModule } from '@angular/core';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooInterceptor } from './foo.interceptor';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    AModule,
    BModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FooInterceptor, multi: true }
  ],
  exports: []
})
export class FooLibModule { }
