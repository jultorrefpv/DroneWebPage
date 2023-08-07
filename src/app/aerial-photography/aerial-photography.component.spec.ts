import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerialPhotographyComponent } from './aerial-photography.component';

describe('AerialPhotographyComponent', () => {
  let component: AerialPhotographyComponent;
  let fixture: ComponentFixture<AerialPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerialPhotographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerialPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
