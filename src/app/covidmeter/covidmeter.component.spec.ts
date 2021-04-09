import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidmeterComponent } from './covidmeter.component';

describe('CovidmeterComponent', () => {
  let component: CovidmeterComponent;
  let fixture: ComponentFixture<CovidmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidmeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
