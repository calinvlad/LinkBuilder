import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildlinkComponent } from './buildlink.component';

describe('BuildlinkComponent', () => {
  let component: BuildlinkComponent;
  let fixture: ComponentFixture<BuildlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
