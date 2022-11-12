import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCarsouelComponent } from './wine-carsouel.component';

describe('WineCarsouelComponent', () => {
  let component: WineCarsouelComponent;
  let fixture: ComponentFixture<WineCarsouelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineCarsouelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineCarsouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
