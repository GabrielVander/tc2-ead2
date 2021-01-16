import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';

import {ProductsComponent} from './products.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { ProductDrawerComponent } from './product-drawer/product-drawer.component';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzDividerModule} from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    ProductsRoutingModule,
    NzListModule,
    CommonModule,
    NzIconModule,
    NzButtonModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzDividerModule
  ],
  declarations: [ProductsComponent, ProductDrawerComponent],
  exports: [ProductsComponent]
})
export class ProductsModule {
}
