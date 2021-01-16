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
import { ProductModalComponent } from './product-modal/product-modal.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import { ProductFormComponent } from './product-form/product-form.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';

@NgModule({
  imports: [
    ProductsRoutingModule,
    NzListModule,
    CommonModule,
    NzIconModule,
    NzButtonModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule
  ],
  declarations: [ProductsComponent, ProductDrawerComponent, ProductModalComponent, ProductFormComponent],
  exports: [ProductsComponent]
})
export class ProductsModule {
}
