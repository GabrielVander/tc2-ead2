import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';

import {ProductsComponent} from './products.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzIconModule} from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    ProductsRoutingModule,
    NzListModule,
    CommonModule,
    NzIconModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule {
}
