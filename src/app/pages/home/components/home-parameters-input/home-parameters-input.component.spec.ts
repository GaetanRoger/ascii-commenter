import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParametersInputComponent } from './home-parameters-input.component';

describe('HomeParametersInputComponent', () => {
  let component: HomeParametersInputComponent;
  let fixture: ComponentFixture<HomeParametersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeParametersInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeParametersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
