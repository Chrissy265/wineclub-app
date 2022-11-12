import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertWineCardComponent } from './dessert-wine-card.component';

describe('DessertWineCardComponent', () => {
  let component: DessertWineCardComponent;
  let fixture: ComponentFixture<DessertWineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertWineCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertWineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
