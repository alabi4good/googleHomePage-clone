import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAppsComponent } from './google-apps.component';

describe('GoogleAppsComponent', () => {
  let component: GoogleAppsComponent;
  let fixture: ComponentFixture<GoogleAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
