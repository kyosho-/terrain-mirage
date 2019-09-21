import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdaljsComponent } from './gdaljs.component';

describe('GdaljsComponent', () => {
  let component: GdaljsComponent;
  let fixture: ComponentFixture<GdaljsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdaljsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdaljsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
