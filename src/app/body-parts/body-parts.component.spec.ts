/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BodyPartsComponent } from './body-parts.component';

describe('BodyPartsComponent', () => {
  let component: BodyPartsComponent;
  let fixture: ComponentFixture<BodyPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
