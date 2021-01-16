import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';

import {ProductsComponent} from './products.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ProductsRoutingModule,
    NzListModule,
    CommonModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule {
}
