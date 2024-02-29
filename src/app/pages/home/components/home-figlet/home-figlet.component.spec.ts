import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFigletComponent } from './home-figlet.component';

describe('HomeFigletComponent', () => {
  let component: HomeFigletComponent;
  let fixture: ComponentFixture<HomeFigletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFigletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFigletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
