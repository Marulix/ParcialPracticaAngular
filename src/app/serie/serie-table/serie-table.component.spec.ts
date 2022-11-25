/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerieTableComponent } from './serie-table.component';

describe('SerieTableComponent', () => {
  let component: SerieTableComponent;
  let fixture: ComponentFixture<SerieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
