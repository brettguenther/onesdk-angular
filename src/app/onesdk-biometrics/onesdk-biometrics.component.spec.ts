import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesdkBiometricsComponent } from './onesdk-biometrics.component';

describe('OnesdkBiometricsComponent', () => {
  let component: OnesdkBiometricsComponent;
  let fixture: ComponentFixture<OnesdkBiometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnesdkBiometricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnesdkBiometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
