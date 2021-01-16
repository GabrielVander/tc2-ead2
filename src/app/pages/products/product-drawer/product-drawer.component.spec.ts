import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDrawerComponent } from './product-drawer.component';

describe('ProductDrawerComponent', () => {
  let component: ProductDrawerComponent;
  let fixture: ComponentFixture<ProductDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
