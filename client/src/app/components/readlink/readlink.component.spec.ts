import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadlinkComponent } from './readlink.component';

describe('ReadlinkComponent', () => {
  let component: ReadlinkComponent;
  let fixture: ComponentFixture<ReadlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
