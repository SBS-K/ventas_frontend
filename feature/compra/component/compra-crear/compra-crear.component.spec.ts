import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCrearComponent } from './compra-crear.component';

describe('CompraCrearComponent', () => {
  let component: CompraCrearComponent;
  let fixture: ComponentFixture<CompraCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
