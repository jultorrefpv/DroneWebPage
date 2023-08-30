import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpvVideosComponent } from './fpv-videos.component';

describe('FpvVideosComponent', () => {
  let component: FpvVideosComponent;
  let fixture: ComponentFixture<FpvVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpvVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpvVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
