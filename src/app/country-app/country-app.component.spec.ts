import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAppComponent } from './country-app.component';

describe('CountryAppComponent', () => {
  let component: CountryAppComponent;
  let fixture: ComponentFixture<CountryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
